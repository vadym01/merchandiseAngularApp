import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-employee-registration',
  templateUrl: './new-employee-registration.component.html',
  styleUrls: ['./new-employee-registration.component.css'],
})
export class NewEmployeeRegistrationComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm | undefined;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    this.employeeService.saveEmployee(data?.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
