import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/services/model/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { error } from 'protractor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle-redactor-info',
  templateUrl: './vehicle-redactor-info.component.html',
  styleUrls: ['./vehicle-redactor-info.component.css'],
})
export class VehicleRedactorInfoComponent implements OnInit {
  displayForm: boolean = false;
  vehicle: Vehicle;
  vehicles: Vehicle[];
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  showVehicleForm(id: number) {
    console.log(id);
    this.displayForm = true;
    this.vehicleService.getVehicleById(id).subscribe(
      (data) => {
        this.vehicle = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onVehicleFormSubmit(data: NgForm) {
    this.vehicle.vehicleName = data?.value.vehicleName;
    this.vehicle.dateOfReceipt = data?.value.dateOfReceipt;
    this.vehicle.liftingCapacity = data?.value.liftingCapacity;
    this.vehicleService.updateVehicle(this.vehicle).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
    const index = this.vehicles.findIndex(
      (vehicle) => vehicle.id === this.vehicle.id
    );
    console.log(index);
    this.vehicles.splice(index, 1, this.vehicle);
    this.displayForm = false;
  }
}
