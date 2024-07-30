import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';

const myapproutes:Routes =[
  { path:'',component: HomeComponent },
  { path:'employee-list', component:EmployeeListComponent},
  { path:'auth', component:AuthComponent, canActivate: [AuthGuard]},
  { path:'add-employee', component:AddEmployeeComponent},
  { path:'edit-employee/:empID', component:EditEmployeeComponent},
  { path:'employee-details/:empID', component:EmployeeDetailsComponent},
  { path: 'not-found', component:NotFoundComponent},
  { path: '**', redirectTo:'not-found'}
]
@NgModule({
  imports: [RouterModule.forRoot(myapproutes)],
  exports: [RouterModule]
})
export class ApproutingModule { 

  constructor(public empService: EmployeeService){
    console.log('ApproutingModule constructer');
  }
}