import { Component, OnInit } from '@angular/core';
import{EmployeeDataService} from '@ariqt/data-employeedetails'
import { Subscription } from 'rxjs';
@Component({
  selector: 'ariqt-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.scss']
})
export class EmployeedataComponent implements OnInit {

  searchString:any=''

  constructor(private _employeeDetails:EmployeeDataService) { }
empSub!:Subscription 
allEmployees :any

  ngOnInit(): void {
    this.empSub = this._employeeDetails.loadEmployee().subscribe((data)=>{
      this.allEmployees =data
      console.log(this.allEmployees)
    })
  }

}
