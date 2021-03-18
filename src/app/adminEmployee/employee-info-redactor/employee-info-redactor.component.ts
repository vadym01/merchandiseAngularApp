import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/services/model/employee.model';
import { error } from 'protractor';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-info-redactor',
  templateUrl: './employee-info-redactor.component.html',
  styleUrls: ['./employee-info-redactor.component.css'],
})
export class EmployeeInfoRedactorComponent implements OnInit {
  employees: Employee[];
  employee: Employee;

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
        console.error(error);
      }
    );
  }

  showEmployeeInfo(index: number) {
    this.employeeInfoIndex = index;
    this.employee = this.employees[index];
    this.showEmployeeForm = true;
  }

  deleteEmployee(index: number) {
    const employee: Employee = this.employees[index];
    this.employeeService.deleteEmployee(employee.id).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
    this.employees.splice(index, 1);
  }

  onSubmitChanges(data: NgForm) {
    this.employee.firstName = data.value.firstName;
    this.employee.lastName = data.value.lastName;
    this.employee.patronymic = data.value.patronymic;
    this.employee.birthDate = data.value.birthDate;
    this.employeeService.updateEmployee(this.employee).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
    this.showEmployeeForm = false;
  }
}
