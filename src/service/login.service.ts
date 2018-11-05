import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }3.
  

  getuser(username:string,password:string){
    let url="http://localhost:8080/user/getUser?username="+username+"&&password="+password
    
     return  this.http.get(url)
  }
}
