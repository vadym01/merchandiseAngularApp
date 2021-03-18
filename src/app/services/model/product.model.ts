import { Employee } from './employee.model';

export interface Product {
  invnumber?: number;
  productName: string;
  description: string;
  weight: number;
  volume: number;
  sender: string;
  receiver: string;
  receiptDate: Date;
  scheduledShipmentDate: Date;
  isPresent?: boolean;
  isProcessed?: boolean;
  loadedByEmployee?: Employee;
  sentByEmployee?: Employee;
  arrivalDate?: Date;
  shipmentDate?: Date;
}
