import { Component, OnInit, ViewChild } from '@angular/core';
import { Incident } from 'src/app/services/model/incident.model';
import { IncidentService } from 'src/app/services/incident.service';
import { error } from 'protractor';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/services/model/vehicle.model';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/services/model/employee.model';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-vehicle-incident',
  templateUrl: './vehicle-incident.component.html',
  styleUrls: ['./vehicle-incident.component.css'],
})
export class VehicleIncidentComponent implements OnInit {
  incidents: Incident[];
  allVehicles: Vehicle[];
  incident: Incident;
  vehicle: Vehicle;
  error: ErrorReport;
  showIncidentForm = false;

  @ViewChild('f') vehicleIncidentForm: NgForm | undefined;

  constructor(
    private incidentService: IncidentService,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    this.incidentService.getIncidentForVehicle().subscribe(
      (data) => {
        this.incidents = data;
        console.log(data);
      },
      (error) => {
        this.error = error.error;
        console.error(error);
      }
    );

    this.vehicleService.getAllAvailableVehicles().subscribe(
      (data) => {
        this.allVehicles = data;
      },
      (error) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

  registerNewIncident() {}

  onDeleteIncidentClickHandler(id: number, index: number) {
    this.incidentService.deleteIncidentById(id);
    this.incidents.splice(index, 1);
  }

  setVehicleInfo(vehicleId: number) {
    this.showIncidentForm = true;
    this.vehicle = this.allVehicles.find((vehicle) => vehicle.id === vehicleId);
  }

  onChangeStatusClickHandler(id: number) {
    const incidentId = this.incidents.findIndex(
      (incident) => incident.id === id
    );
    const incident = this.incidents[incidentId];
    incident.resolved = !incident.resolved;
    this.incidents.splice(incidentId, 1, incident);
    this.incidentService.changeIncidentStatus(id);
  }

  onUpdateClickHandler(index: number) {
    const incident = this.incidents[index];
    this.vehicle = incident.vehicle;
    this.incident = incident;
    this.showIncidentForm = true;
  }

  onSubmit() {
    let incident: Incident;
    if (this.incident != undefined) {
      this.incident.date = this.vehicleIncidentForm.value.date;
      this.incident.incidentDescription = this.vehicleIncidentForm.value.incidentDescription;
      incident = this.incident;
    } else {
      incident = { vehicle: this.vehicle, ...this.vehicleIncidentForm?.value };
    }
    this.incidentService.registerNewIncident(incident).subscribe(
      (response) => {
        incident = response;
      },
      (error) => {
        this.error = error.error;
        console.log(error);
      }
    );

    const vehicleIndex = this.allVehicles.findIndex(
      (vehicle) => vehicle.id === this.vehicle.id
    );
    this.allVehicles.splice(vehicleIndex, 1);

    const incidentIndex = this.incidents.findIndex(
      (incidentInstance) => incidentInstance.id === incident.id
    );
    console.log(incident);
    this.allVehicles.slice(incident.vehicle.id, 1);
    this.incidents.splice(incidentIndex, 0, incident);
  }
}
