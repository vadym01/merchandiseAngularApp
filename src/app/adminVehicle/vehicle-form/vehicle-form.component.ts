import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Vehicle } from 'src/app/services/model/vehicle.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent implements OnInit {
  @ViewChild('f') formElement: NgForm | undefined;
  @Input() formData: Vehicle;
  @Output() newVehicleEvent = new EventEmitter<NgForm>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    this.newVehicleEvent.emit(data);
  }
}
