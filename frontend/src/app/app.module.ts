import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NOTAMComponent } from './components/notam/notam.component';
import { DronechartComponent } from './components/dronechart/dronechart.component';
import { WeatherradarComponent } from './components/weatherradar/weatherradar.component';
import { PilotresourcesComponent } from './components/pilotresources/pilotresources.component';
import { OperationalreportsComponent } from './components/operationalreports/operationalreports.component';
import { CompanynotamComponent } from './components/companynotam/companynotam.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { EopComponent } from './components/eop/eop.component';
import { ResourcesComponent } from './views/resources/resources.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolsComponent } from './views/tools/tools.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'resources', pathMatch: 'full'},
  {path: 'resources', component: ResourcesComponent},
  {path: 'tools', component: ToolsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NOTAMComponent,
    DronechartComponent,
    WeatherradarComponent,
    PilotresourcesComponent,
    OperationalreportsComponent,
    CompanynotamComponent,
    ScheduleComponent,
    EopComponent,
    ResourcesComponent,
    NavbarComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
