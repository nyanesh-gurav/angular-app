import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';

@Component({
  selector: 'app-wel-come',
  templateUrl: './wel-come.component.html',
  styleUrls: ['./wel-come.component.css']
})
export class WelComeComponent implements OnInit {
  welcomemessage: string;
  name: string;
  constructor(private route: ActivatedRoute, private service: WelcomedataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);


  }
  getWelcomeMessage() {
    this.service.executeHelloWorldBean().subscribe(response=>{
     this.handleResponse(response);
    });
    // this.getMessageWithParameter();
  }
  handleResponse(response) {
    this.welcomemessage = response;
    console.log("this is the message response", response.message);

  }
  handleError(error) {
    this.welcomemessage = error.error.message;
  }
  getMessageWithParameter() {
    this.service.helloWorldWithPathvarable(this.name).subscribe(data =>
      this.welcomemessage = data.message
    );
   }

}
