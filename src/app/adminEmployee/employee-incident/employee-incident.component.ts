import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Incident } from 'src/app/services/model/incidents.model';
import { IncidentsService } from 'src/app/services/incident.service';
import { Employee } from 'src/app/services/model/employee.model';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-incident',
  templateUrl: './employee-incident.component.html',
  styleUrls: ['./employee-incident.component.css'],
})
export class EmployeeIncidentComponent implements OnInit {
  incident: Incident;
  employee: Employee;
  showIncidentForm: boolean = false;
  incidents: Incident[];
  employees: Employee[];
  @ViewChild('f') employeeIncidentForm: NgForm | undefined;

  constructor(
    private incidentsService: IncidentsService,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllAvailableEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.incidentsService.getIncidentsForEmployee().subscribe(
      (data) => {
        this.incidents = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onUpdateClickIncidentHandler(index: number) {
    const incident = this.incidents[index];
    this.employee = incident.employee;
    this.incident = incident;
    this.showIncidentForm = true;
  }

  onSetEmployeeInfoClickHandler(index: number) {
    this.showIncidentForm = true;
    this.employee = this.employees[index];
    // this.incident.employee = this.employee;
  }

  deleteIncidentById(id: number, index: number) {
    this.incidentsService.deleteIncidentById(id);
    this.employees.push(this.incidents[index].employee);
    this.incidents.splice(index, 1);
  }

  onSubmit() {
    let incident: Incident;
    if (this.incident != undefined) {
      this.incident.date = this.employeeIncidentForm.value.date;
      this.incident.incidentDescription = this.employeeIncidentForm.value.incidentDescription;
      incident = this.incident;
    } else {
      incident = {
        ...this.employeeIncidentForm.value,
        employee: this.employee,
      };
    }

    this.incidentsService.registerNewIncident(incident).subscribe(
      (response) => {
        console.log(response);
        if (response?.id !== this.incident?.id) this.incidents.push(response);
      },
      (error) => {
        console.log(error);
      }
    );
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === incident.employee.id
    );

    this.employees.splice(employeeIndex, 1);
    this.showIncidentForm = false;
  }
}
