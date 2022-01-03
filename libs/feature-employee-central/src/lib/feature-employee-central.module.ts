

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { Routes, RouterModule } from '@angular/router';
import{UtilFilterModule} from '@ariqt/util-filter'
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'employee',component:EmployeedataComponent}
]

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes),UtilFilterModule,FormsModule],
  declarations: [
    EmployeedataComponent
  ],
  exports:[EmployeedataComponent]
})
export class FeatureEmployeeCentralModule {}
