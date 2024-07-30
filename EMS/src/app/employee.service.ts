import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from './employee';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private path:string="/api/Employees";   //in memory

  LocationList = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad']; 

  employees:Employee[]=[] ;
  employee!:Employee;

  //All Employees
  getAllEmployees()
  {
    this.http.get<Employee[]>(this.path)
    .subscribe(Emp=>{
       this.employees=Emp
    });
  }

  //Add Employee
  addEmployee(EmpDetails:Employee)
  {
    this.http.post(this.path, EmpDetails)
    .subscribe(EmpDetais=>{
       let output =EmpDetais;
       console.log(output);
    });
  }

  //Get Employee
  getEmployee(id:number)
  {
    this.http.get(this.path+'/'+id)
    .subscribe(EmpDetais=>{
       let output =EmpDetais;
       console.log(output);
    });
  }

  //Edit Employee
  editEmployee(EmpDetails:Employee)
  {
    this.http.put(this.path, EmpDetails)
    .subscribe(EmpDetais=>{
       let output =EmpDetais;
       console.log(output);
    });
  }

  //Delete Employee
  deleteEmployee(id:number)
  {
  this.http.delete(this.path+"/"+id).subscribe(
      result => console.log(result),
      err => console.error(err)
    );
  }
}