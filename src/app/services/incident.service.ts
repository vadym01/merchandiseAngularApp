import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from './model/incident.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  registerNewIncident(incident: any) {
    return this.http.put<Incident>(this.baseUrl + `incident`, incident);
  }

  getIncidentForVehicle() {
    return this.http.get<Incident[]>(this.baseUrl + 'incident/vehicle');
  }

  deleteIncidentById(id: number) {
    return this.http.delete(this.baseUrl + `incident/${id}`).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getIncidentForEmployee() {
    return this.http.get<Incident[]>(this.baseUrl + 'incident/employee');
  }

  changeIncidentStatus(id: number) {
    return this.http
      .put(this.baseUrl + `incident/status/${id}`, null)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
