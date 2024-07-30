import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserAuthorized(auth: boolean){

    return auth?true:false;
  }
}
