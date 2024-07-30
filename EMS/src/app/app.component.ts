import { Component, VERSION } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'EMS';
  constructor(private router: Router){
    console.log('appcomponent constructer');
  }

  ngOnInit()
  {    
  } 

  gotoHome()
  {
    this.router.navigate(['']);
  }
  gotoEmployeeList()
  {    
    this.router.navigate(['app-employee-list']);
  }
  gotoAuth()
  {    
    this.router.navigate(['auth']);
  }

  gotoAddemployee()
  {    
    this.router.navigate(['app-add-employee']);
  }

}
