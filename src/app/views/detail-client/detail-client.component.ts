import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'service/client.service';
import { NoteService } from 'service/note.service';
import { OperationService } from 'service/operation.service';
import { TacheService } from 'service/tache.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {
  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#vente'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#achat'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: '#subscription'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors:Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];
   
  taches:any[]=[{
    id:0,
    dateDebut:"2018-10-30",
    dateFin:"2018-10-31",
    description:"achnfbkfs lzjaie anniezn ankfie",
    sujet:"achat",
    statut:"active",
    priorite:"medium",
 }];
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
   id:number;
   tache={
    id:0,
    dateDebut:Date,
    dateFin:Date,
    description:"",
    sujet:"",
    statut:"active",
    priorite:"medium",
 };

 note:any[]=[]
 client:any
 operations:any[]=[]
 dateDebutTache:""
  constructor(private router:ActivatedRoute,private clientservice:ClientService,private route:Router,private noteservice:NoteService,
    private operationservice:OperationService,private tacheService:TacheService) { 
    router.params.forEach(param=>{
        this.id=param.id;
    })
   
    this.client = clientservice.getClientById(this.id)
    this.notes = noteservice.mesNote(this.id)
    this.operations = operationservice.getOperationByIdCleint(this.client.id)
    console.log(this.operations)
  }

  ngOnInit() {
  }
  modifier(id){
   this.route.navigate(["modifClient/",id])
  }

  ajouterNote(){
      this.route.navigate(["note"])
  }
  ajouterTache()
  {
     this.route.navigate(["tache"])
  }
  voirProfil(idclient){
   this.route.navigate(["profil/",idclient])
  }

  chercherTache(){
    this.taches=this.tacheService.getTache(this.dateDebutTache)
  }
}
