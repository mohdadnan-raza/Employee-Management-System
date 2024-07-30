import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello.component';
import { EmployeeService } from './employee.service';
import { NamefilterPipe } from './namefilter.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component'
import { ApproutingModule } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CountfilterPipe } from './countfilter.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ApproutingModule, HttpClientModule,HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )],
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    HelloComponent,
    NamefilterPipe,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CountfilterPipe,
    NotFoundComponent,
    AuthComponent
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService, AuthGuard]
})
export class AppModule {}
