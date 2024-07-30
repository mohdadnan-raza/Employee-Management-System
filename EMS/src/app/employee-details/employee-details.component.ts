import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  EmployeeData:any;
  EmpID!:number;
  constructor(private location:Location, private route:ActivatedRoute,public empService: EmployeeService) { }

  ngOnInit() {
    this.EmpID = Number(this.route.snapshot.paramMap.get('empID'));
    this.EmployeeData = this.empService.employees.find(x=> x.id == this.EmpID );
  }
  
  goBack()
  {
    this.location.back();
  }
  
}
