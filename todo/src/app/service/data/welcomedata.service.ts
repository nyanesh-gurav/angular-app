import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export class HelloWorldBean{
  constructor( public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {
  baseUrl = "http://localhost:8080"
  constructor(private http: HttpClient) { }
  
  executeHelloWorldBean() {
    
    let re = this.http.get(`${this.baseUrl}/helloworld`, { responseType: 'text' });
    return re;
  }
  helloWorldWithPathvarable(name) {
    console.log("hello world  Path Variable service");
    return this.http.get<HelloWorldBean>(`${this.baseUrl}/helloworld/path-variable/${name}`);
  }
createBasicAuthenticationhttpHeader(){
  let username='nyanesh'
  let password='nyanesh'
  let basicAuthHeaderString='Basic' + window.btoa(username + ':' + password);

}
}
