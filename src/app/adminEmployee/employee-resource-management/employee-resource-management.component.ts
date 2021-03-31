import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/services/model/employee.model';
import { error } from 'protractor';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-employee-resource-management',
  templateUrl: './employee-resource-management.component.html',
  styleUrls: ['./employee-resource-management.component.css'],
})
export class EmployeeResourceManagementComponent implements OnInit {
  allAvailableEmployees: Employee[];
  error: ErrorReport;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAllAvailableEmployees().subscribe(
      (data) => {
        this.allAvailableEmployees = data;
      },
      (error) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }
}
