import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavRoots } from './sideBar/nav-roots/nav-roots.component';
import { DropDownNavBarComponent } from './sideBar/nav-elements/drop-down-nav-bar/drop-down-nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductHistoryComponent } from './admin/product-history/product-history.component';
import { WarehouseReportComponent } from './admin/warehouse-report/warehouse-report.component';
import { NewEmployeeRegistrationComponent } from './adminEmployee/new-employee-registration/new-employee-registration.component';
import { EmployeeInfoRedactorComponent } from './adminEmployee/employee-info-redactor/employee-info-redactor.component';
import { EmployeeResourceManagementComponent } from './adminEmployee/employee-resource-management/employee-resource-management.component';
import { NewVehicleRegistrationComponent } from './adminVehicle/new-vehicle-registration/new-vehicle-registration.component';
import { VehicleRedactorInfoComponent } from './adminVehicle/vehicle-redactor-info/vehicle-redactor-info.component';
import { VehicleResourcesManagementComponent } from './adminVehicle/vehicle-resources-management/vehicle-resources-management.component';
import { NewProductRegistrationComponent } from './admin/new-product-registration/new-product-registration.component';
import { EmployeeFormComponent } from './adminEmployee/employee-form/employee-form.component';
import { EmployeeTableComponent } from './adminEmployee/employee-table/employee-table.component';

import { VehicleTableComponent } from './adminVehicle/vehicke-table/vehicle-table.component';
import { VehicleFormComponent } from './adminVehicle/vehicle-form/vehicle-form.component';
import { VehicleIncidentComponent } from './adminVehicle/vehicle-incident/vehicle-incident.component';

import { TitleComponent } from './globalComponents/title/title.component';
import { EmployeeIncidentComponent } from './adminEmployee/employee-incident/employee-incident.component';
import { NewProductRegistrationFormComponent } from './admin/new-product-registration-form/new-product-registration-form.component';
import { SidebarFillerComponent } from './globalComponents/sidebar-filler/sidebar-filler.component';

// import { HttpClient } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin/registration',
    pathMatch: 'full',
  },
  {
    path: 'admin/registration',
    component: NewProductRegistrationComponent,
  },
  {
    path: 'admin/report',
    component: WarehouseReportComponent,
  },
  {
    path: 'admin/history',
    component: ProductHistoryComponent,
  },
  {
    path: 'admin/employee/registration',
    component: NewEmployeeRegistrationComponent,
  },
  {
    path: 'admin/employee/redactor',
    component: EmployeeInfoRedactorComponent,
  },
  {
    path: 'admin/employee/management',
    component: EmployeeResourceManagementComponent,
  },
  {
    path: 'admin/employee/incident',
    component: EmployeeIncidentComponent,
  },
  {
    path: 'admin/vehicle/registration',
    component: NewVehicleRegistrationComponent,
  },
  {
    path: 'admin/vehicle/info',
    component: VehicleRedactorInfoComponent,
  },
  {
    path: 'admin/vehicle/management',
    component: VehicleResourcesManagementComponent,
  },
  {
    path: 'admin/vehicle/management',
    component: VehicleResourcesManagementComponent,
  },
  {
    path: 'admin/vehicle/incident',
    component: VehicleIncidentComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavRoots,
    DropDownNavBarComponent,
    NewProductRegistrationComponent,
    ProductHistoryComponent,
    WarehouseReportComponent,
    NewEmployeeRegistrationComponent,
    EmployeeInfoRedactorComponent,
    EmployeeResourceManagementComponent,
    NewVehicleRegistrationComponent,
    VehicleRedactorInfoComponent,
    VehicleResourcesManagementComponent,
    EmployeeFormComponent,
    EmployeeTableComponent,
    VehicleFormComponent,
    VehicleTableComponent,
    VehicleIncidentComponent,
    TitleComponent,
    EmployeeIncidentComponent,
    NewProductRegistrationFormComponent,
    SidebarFillerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
