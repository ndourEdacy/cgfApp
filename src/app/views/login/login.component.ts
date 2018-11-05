import { Component, OnInit } from '@angular/core';
import { LoginService } from 'service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  user:any=null;
  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit() {
  }
  login(){
   this.loginService.getuser(this.username,this.password).subscribe((data:any)=>{
    
      this.user = data
      if(this.user!=null)
      {
        this.route.navigate(["cgf-crm/admin1"])
      }
     
   })
  
  }

}
