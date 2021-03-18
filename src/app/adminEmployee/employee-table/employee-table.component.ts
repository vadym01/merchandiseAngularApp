import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/services/model/employee.model';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() employeeInfoIndex = new EventEmitter<number>();
  @Input() showButtons: boolean = false;
  @Output() employeeDeleteIndex = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  showEmployeeInfo(index: number) {
    this.employeeInfoIndex.emit(index);
  }

  onDeleteEmployeeHandler(index: number) {
    this.employeeDeleteIndex.emit(index);
  }
}
