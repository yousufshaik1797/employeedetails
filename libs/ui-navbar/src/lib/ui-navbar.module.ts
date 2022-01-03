import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import{EmployeedataComponent} from '@ariqt/feature-employee-central'

const routes:Routes=[
  {path:'employee',component:EmployeedataComponent}
]



@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  declarations: [
    NavbarComponent
  ],
  exports:[NavbarComponent]
})
export class UiNavbarModule {}
