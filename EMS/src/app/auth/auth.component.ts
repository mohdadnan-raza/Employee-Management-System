import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  marked = false;
  theCheckbox = false;

  constructor(private AuthService: AuthService, private location: Location, private route: ActivatedRoute, private router: Router){

  }

  toggleVisibility(e:any){
    this.marked= e.target.checked;
    if(this.marked){
      this.AuthService.isUserAuthorized(true);
    }
  }

  gotoAddEmp() {
    this.router.navigate(['/add-employee']);
  }
  Cancel() {
    this.location.back();
  }

}
