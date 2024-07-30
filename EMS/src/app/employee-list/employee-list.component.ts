import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  search:string = '';
  constructor(public empService: EmployeeService, private router:Router, private location:Location){
    console.log('appcomponent constructer');    
  }
  ngOnInit()
  {
    this.empService.getAllEmployees();
    console.log('appcomponent ngOnInit');
  }
  getEmpDetails(empID: any)
  {
    this.router.navigate(['employee-details/' +empID]);  
  }
  editEmpDetails(empID: any)
  {
    this.router.navigate(['edit-employee/' +empID]);  
  }
  deleteEmpDetails(empID: any)
  {
    this.empService.deleteEmployee(empID);
    this.empService.employees = this.empService.employees.filter(x => x.id != empID);    
  }

  goBack()
  {
    this.location.back();
  }

}
