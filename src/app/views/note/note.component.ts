import { Component, OnInit } from '@angular/core';
import { NoteService } from 'service/note.service';
import { ClientService } from 'service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note={
    "id":0,
    "sujet":"",
    "description":"",
    "idclient":0,
    "isChecked":false,
    "dateCreate":""
  }
  choix=false
  clients:any
  idClient=0
  nomclient:any
  cni:""
  constructor(private noteService:NoteService,private clientservice:ClientService,private router:Router) { }

  ngOnInit() {
  }
  ajouterNote(){
    this.note.idclient = this.idClient
    this.noteService.ajouterNote(this.note);
    console.log(this.note)
    this.clientservice.ratacherTache(this.note.id,this.idClient)
    this.router.navigate(["detailClient/",this.idClient])
  }

  getClient(){
    this.clients = this.clientservice.getAllClient()
  }
  
  saveChoix()
  {
      this.note.isChecked = false
      let today = new Date()
      let jj = today.getDate() 
      let mm = today.getMonth()
      let yy = today.getFullYear()
      this.note.dateCreate = yy+"-"+mm+"-"+jj
      let c = this.clientservice.getClientById(this.idClient)
      this.nomclient = c.prenom+" "+c.nom
     
  }

  checkValue(even:any,id:number)
  {
    if(even == "A")
    {
     this.idClient = id
      
    }
    else{
      this.note.isChecked = false
      this.idClient=-1
    }
    
  }
  chercher(){
    this.clients=[]
    this.clients.push(this.clientservice.chercherClientByEmail(this.cni))
  }

}
