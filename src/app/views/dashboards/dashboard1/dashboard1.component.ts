import { Component, OnInit } from '@angular/core';
import { TacheService } from 'service/tache.service';
import { NoteService } from 'service/note.service';
import { Tache } from 'models/tache';
import { ClientService } from 'service/client.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component implements OnInit {

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40,40,100,20], label: '#achat'},
    {data: [28, 80, 40, 69, 36, 37, 110,120,10,90], label: '#vente'},
    {data: [38, 58, 30, 90, 45, 65, 30,29,12,36], label: '#subscription'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul','Au','Sep','Oct','Nov','Dec'];

  public chartColors:Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];
   
  taches:any[]=[];
  notes:any[]=[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };
  tache={
     id:0,
     dateDebut:Date,
     dateFin:Date,
     description:"",
     sujet:"",
     statut:"active",
     priorite:"medium",
  };
  
  
  
  cni=""
  nom="";prenom="";date:any
 
  constructor(private tacheService:TacheService,private noteService:NoteService,private clientservice:ClientService,private router:Router,
     private htpp:HttpClient){
    this.taches = tacheService.getAllTache();
    this.notes = noteService.getAllNote();
  
   
  }

  ngOnInit() {
  }
    modif(id){
      this.tache = this.tacheService.getTacheById(id);
    }

    modifier(f){
      console.log(f)
      this.tacheService.modifierTache(f);
      this.taches = this.tacheService.getAllTache();
    }

    chercher(){
      this.clientservice.recherche(this.cni)
    }

    chercheByName(){
      this.clientservice.chercherClientByName(this.nom,this.prenom,this.date)
    }

    ajouterMeeting(){
     this.router.navigate(["note"])
    }

    ajouterTache(){
      this.router.navigate(["tache"])
    }
    modifnote(id){
      
    }
    getuser(){
      let url="http://localhost:8080/user/getUser?username=ndour&&password=123"
      
     return  this.htpp.get(url)
    }
    addUser(){
      let url1="http://localhost:8080/user/addUser"
      let user={
        nom:"ndour",
        prenom:"baila",
        username:"ndourbaila",
        password:"123",
        cni:"11111",
        role:"",
        email:"ndourbaila92@gmail.com"
}
      return this.htpp.post<User>(url1,user)
      .pipe(
        
      );;
    }
}
