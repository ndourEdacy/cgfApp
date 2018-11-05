import { Component, OnInit } from '@angular/core';
import { ClientService } from 'service/client.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeclient',
  templateUrl: './listeclient.component.html',
  styleUrls: ['./listeclient.component.scss']
})
export class ListeclientComponent implements OnInit {
  clients:any[]=[]
  client:any={}
  cni=""
  constructor(private clientService:ClientService,private router:Router) {
      this.clients=clientService.getAllClient();
   }

  ngOnInit() {
  }
  detailClient(id){
   // this.client = this.clientService.getClientById(id)
   this.router.navigate(["/detailClient",id])
   
  }
  modifClient() {
    this.client = this.clientService.modifClient(this.client)
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.client))
  }
  recherche(){
    console.log(this.cni)
    this.client = this.clientService.chercherClientByEmail(this.cni);
    
    if(this.client!=null)
    {
      this.detailClient(this.client.id)
    }
  }
}
