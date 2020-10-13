import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
errorMessage:string="An error occured, Contact support ....."
  constructor() { }

  ngOnInit() {
    console.log("nyanesh gurav");
    
  }

}
