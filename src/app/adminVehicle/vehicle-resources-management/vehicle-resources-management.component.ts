import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/services/model/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { error } from 'protractor';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-vehicle-resources-management',
  templateUrl: './vehicle-resources-management.component.html',
  styleUrls: ['./vehicle-resources-management.component.css'],
})
export class VehicleResourcesManagementComponent implements OnInit {
  vehicles: Vehicle[];
  error: ErrorReport;
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getAllAvailableVehicles().subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }
}
