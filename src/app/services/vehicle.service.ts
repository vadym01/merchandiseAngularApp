import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './model/vehicle.model';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  saveNewVehicle(vehicle: Vehicle) {
    return this.http.post(this.baseUrl + 'vehicle', vehicle);
  }

  getVehicleByVehicleName(params: NgForm) {
    return this.http.get<Vehicle[]>(this.baseUrl + 'vehicle/find/', {
      params: params.value,
    });
  }

  getAllVehicles() {
    return this.http.get<Vehicle[]>(this.baseUrl + 'vehicle/');
  }

  getVehicleById(id: number) {
    return this.http.get<Vehicle>(this.baseUrl + `vehicle/${id}`);
  }

  updateVehicle(vehicle: Vehicle) {
    return this.http.put<Vehicle>(this.baseUrl + 'vehicle', vehicle);
  }

  getAllAvailableVehicles() {
    return this.http.get<Vehicle[]>(this.baseUrl + 'vehicle/available');
  }
}
