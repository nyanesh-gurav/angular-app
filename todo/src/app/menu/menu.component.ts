import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLogged:boolean=false;
  constructor(private authenticate:AuthenticationService) { }

  ngOnInit() {
// this.isUserLogged=this.authenticate.isUserLoggedIn();
  }

}
