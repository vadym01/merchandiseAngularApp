import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import { error } from 'protractor';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-new-vehicle-registration',
  templateUrl: './new-vehicle-registration.component.html',
  styleUrls: ['./new-vehicle-registration.component.css'],
})
export class NewVehicleRegistrationComponent implements OnInit {
  error: ErrorReport;
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {}

  onVehicleSubmit(formData: NgForm) {
    console.log(formData.value);
    this.vehicleService.saveNewVehicle(formData?.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }
}
