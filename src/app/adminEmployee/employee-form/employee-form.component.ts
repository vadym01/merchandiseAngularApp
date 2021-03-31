import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/services/model/employee.model';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('f') formElement: NgForm | undefined;

  @Input() formData: Employee;
  @Input() error: ErrorReport;
  @Output() newItemEvent = new EventEmitter<NgForm>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    this.newItemEvent.emit(data);
    this.formElement.reset();
  }
}
