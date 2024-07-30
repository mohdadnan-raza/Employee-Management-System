import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  NewEmpID: number = 0;
  employeeData: any;
  errorMessage: string = "";

  constructor(public empService: EmployeeService, private location: Location, private route: ActivatedRoute, private router: Router) {
    console.log('AddEmployee constructor');
  }
  ngOnInit() {
    console.log('AddEmployee ngOnInit');
    this.loadInitialData();
  } 

  loadInitialData() {
    this.employeeData = {} as Employee;
    this.empService.employees.forEach((x:Employee) => {
      if (x.id > this.NewEmpID) {
        this.NewEmpID = x.id;
      }
    })
    this.employeeData.id = this.NewEmpID + 1;
  }

  addEmployeeDetails(EmpDetails: any) {
    this.empService.addEmployee(EmpDetails);
    this.empService.employees.push(EmpDetails);
    this.loadInitialData();
    this.router.navigate(['/employee-list']);
  }
  Cancel() {
    this.location.back();
  }
  ngDestroy() {
    console.log('Add Emp Destroy');
  }

}