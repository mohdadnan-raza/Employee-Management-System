import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Location} from '@angular/common';
@Component({
  selector: 'edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  EmployeeData:any;
  EmpID!:number;
  constructor(private route:ActivatedRoute, private location:Location,public empService: EmployeeService) { }

  ngOnInit() {
    this.EmpID = Number(this.route.snapshot.paramMap.get('empID'));
    this.EmployeeData = this.empService.employees.find(x=> x.id == this.EmpID );
  }
  updateEmployee(EmpDetails:any)
  {   
    this.empService.editEmployee(EmpDetails);
    this.location.back();
  }

  Cancel()
  {
    this.location.back();
  }

}