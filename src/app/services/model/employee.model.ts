import { Data } from '@angular/router';

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  DOB: Date;
  available: boolean;
}
