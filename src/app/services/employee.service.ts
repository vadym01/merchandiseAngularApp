import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './model/employee.model';

import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  saveEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl + 'employee', employee);
  }

  getEmployeeByName(params: NgForm) {
    return this.http.get<Employee[]>(this.baseUrl + 'employee/find/', {
      params: params.value,
    });
  }

  getAllEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employee');
  }

  getAllAvailableEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employee/available');
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + 'employee', employee);
  }
}
