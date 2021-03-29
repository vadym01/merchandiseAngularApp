import { Employee } from './employee.model';
import { Vehicle } from './vehicle.model';

export interface Incident {
  id?: number;
  incidentDescription: string;
  date: Date;
  resolved: boolean;
  employee?: Employee;
  vehicle?: Vehicle;
}
