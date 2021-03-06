import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import { ClientComponent } from './client/client.component';
import { OperationComponent } from './operation/operation.component';
import { ProspectComponent } from './prospect/prospect.component';
import { TacheComponent } from './tache/tache.component';
import { NoteComponent } from './note/note.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SimulateurComponent } from './simulateur/simulateur.component';
import { ListeclientComponent } from './listeclient/listeclient.component';
import { ListeprospectComponent } from './listeprospect/listeprospect.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { DetailProspectComponent } from './detail-prospect/detail-prospect.component';
import { DetailNoteComponent } from './detail-note/detail-note.component';
import { DetailTacheComponent } from './detail-tache/detail-tache.component';
import { ModifClinetComponent } from './modif-clinet/modif-clinet.component';
import { LoginComponent } from './login/login.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    Profile1Component,
    HelpComponent,
    ClientComponent,
    OperationComponent,
    ProspectComponent,
    TacheComponent,
    NoteComponent,
    WorkflowComponent,
    SimulateurComponent,
    ListeclientComponent,
    ListeprospectComponent,
    DetailClientComponent,
    DetailProspectComponent,
    DetailNoteComponent,
    DetailTacheComponent,
    ModifClinetComponent,
    LoginComponent,
    ProfilClientComponent,

  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,    
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
