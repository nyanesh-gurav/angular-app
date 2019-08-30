import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = ""
  isCredential: boolean = false;
  constructor(private router: Router, private authenticateService: AuthenticationService) { }

  ngOnInit() {
  }
  onClickLogin() {
    if (this.authenticateService.authenticate(this.userName, this.password)){
      this.router.navigate(['welcome', this.userName]);
      this.isCredential = false;
    }
    else {
      this.isCredential = true;
    }
  }

}
