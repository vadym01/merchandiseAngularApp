import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/services/model/employee.model';
import { error } from 'protractor';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-employee-info-redactor',
  templateUrl: './employee-info-redactor.component.html',
  styleUrls: ['./employee-info-redactor.component.css'],
})
export class EmployeeInfoRedactorComponent implements OnInit {
  employees: Employee[];
  employee: Employee;
  error: ErrorReport;

  @ViewChild('f') searchForm: NgForm | undefined;
  employeeInfoIndex: number;
  showEmployeeForm: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        this.error = error.error;
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.employeeService.getEmployeeByName(this.searchForm).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        this.error = error.error;
        console.error(error);
      }
    );
  }

  showEmployeeInfo(index: number) {
    this.employeeInfoIndex = index;
    this.employee = this.employees[index];
    this.showEmployeeForm = true;
  }

  onSubmitChanges(data: NgForm) {
    this.employee.firstName = data.value.firstName;
    this.employee.lastName = data.value.lastName;
    this.employee.patronymic = data.value.patronymic;
    this.employee.dob = data.value.dob;
    this.employeeService.updateEmployee(this.employee).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.error = error;
        console.error(error);
      }
    );
    this.showEmployeeForm = false;
  }
}
