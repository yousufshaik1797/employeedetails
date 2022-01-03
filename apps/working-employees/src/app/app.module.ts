import { DataEmployeedetailsModule } from './../../../../libs/data-employeedetails/src/lib/data-employeedetails.module';

import {  UiNavbarModule } from '@ariqt/ui-navbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FeatureEmployeeCentralModule,EmployeedataComponent} from "@ariqt/feature-employee-central"
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'employee',component:EmployeedataComponent}
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes),UiNavbarModule,FeatureEmployeeCentralModule,DataEmployeedetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
