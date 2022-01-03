import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from 'libs/data-employeedetails/employeedata.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  employeeData:string ="http://localhost:3333/api"

  constructor(private _http: HttpClient) { }

  loadEmployee(){
    return this._http.get(this.employeeData)
  }
  

}
