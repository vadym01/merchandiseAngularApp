import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Vehicle } from 'src/app/services/model/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { error } from 'protractor';
import { NgForm } from '@angular/forms';
import { ErrorReport } from 'src/app/services/model/error.model';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css'],
})
export class VehicleTableComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm | undefined;
  @Input() showActions: boolean = false;
  @Input() vehicles: Vehicle[];
  @Input() vehicle: Vehicle;
  @Input() error: ErrorReport;
  @Output() vehicleInfoId = new EventEmitter<number>();
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {}

  showVehicleInfo(id: number) {
    this.vehicleInfoId.emit(id);
  }

  onSubmit() {
    this.vehicleService.getVehicleByVehicleName(this.searchForm).subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
