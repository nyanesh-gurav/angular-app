import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username, password) {
    console.log("before",this.isUserLoggedIn());
    if (username === "Nyanesh" && password === "nyanesh") {
      sessionStorage.setItem('authenticateUser',username);
    console.log("after",this.isUserLoggedIn());

      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateUser')
    return !(user ===null)
  }
  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
