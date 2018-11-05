import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients:any[]=[{
      id:1,
      nom:"ndour",
      prenom:"baila",
      email:"bndour@cgfbourse.com",
      tel:"770926218",
      dateNaiss:"1111-11-11",
      adress:"",
      ville:"",
      pays:"",
      lieuNaiss:"",
      cni:"11111",
      idTache:0
  },{
    id:2,
    nom:"ndiaye",
    prenom:"mamadou",
    email:"mndiaye@cgfbourse.com",
    tel:"770926218",
    dateNaiss:"1111-11-11",
    adress:"",
    ville:"",
    pays:"",
    lieuNaiss:"",
    cni:"22222",
    idTache:0
},{
  id:3,
  nom:"sow",
  prenom:"amina",
  email:"asow@cgfbourse.com",
  tel:"770926218",
  dateNaiss:"1111-11-11",
  adress:"",
  ville:"",
  pays:"",
  lieuNaiss:"",
  cni:"33333",
  idTache:0
}]
  id=0
  constructor(private router:Router,private http:HttpClient) { }
  ajoutClient(t){
    t.id = this.id+1;
    this.id++;
    this.clients.push(t);
  }
  
  getAllClient(){
    let url = "http://localhost:8080/clients/get"
    return this.clients
  }

  getClientById(id:number){
 
     for(let i = 0 ; i < this.clients.length ; i++)
     {
       if(this.clients[i].id == id)
       {
         return this.clients[i]
       }
     }
     return null;
  }
  modifClient(t){
    for(let i = 0 ; i < this.clients.length ; i++)
    {
      if(this.clients[i].id === t.id)
      {
        this.clients[i] = t;
        return this.clients[i]
      }
    }
    return null;
  }
  
  chercherClientByEmail(ch:string){
   
    if(ch != "")
    {
    
      for(let i = 0 ; i < this.clients.length ; i++)
      {
        if(this.clients[i].email === ch || this.clients[i].cni == ch)
        {
          
          return this.clients[i]
        }
  
      }
    }
   

    return null;
  }

  chercherClientByName(nom:string , prenom:string,dateNaiss:DateConstructor)
  {
    
    for(let i = 0 ; i < this.clients.length ; i++)
    {
    
      if(this.clients[i].nom === nom && this.clients[i].prenom === prenom && this.clients[i].dateNaiss === dateNaiss)
      {
        
        this.detailClient(this.clients[i].id)
        return this.clients[i]
      }

    }

    return null;
  }

  recherche(cni){
    console.log(this.id)
    let client = this.chercherClientByEmail(cni);
    
    if(client!=null)
    {
      this.detailClient(client.id)
    }
  }
  detailClient(id){
    // this.client = this.clientService.getClientById(id)
    this.router.navigate(["/detailClient",id])
    
   }
   ratacherTache(idtache:number,idclient:number)
   {
     
     this.clients.forEach(client=>{
         if(client.id == idclient){
           client.idTache = idtache
           console.log(client)
         }
     })
   }
   
}


