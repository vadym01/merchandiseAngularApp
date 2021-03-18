import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from './model/incidents.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IncidentsService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  registerNewIncident(incident: any) {
    return this.http.put<Incident>(this.baseUrl + `incidents`, incident);
  }

  getIncidentsForVehicle() {
    return this.http.get<Incident[]>(this.baseUrl + 'incidents/vehicle');
  }

  deleteIncidentById(id: number) {
    return this.http.delete(this.baseUrl + `incidents/${id}`).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getIncidentsForEmployee() {
    return this.http.get<Incident[]>(this.baseUrl + 'incidents/employee');
  }
}
