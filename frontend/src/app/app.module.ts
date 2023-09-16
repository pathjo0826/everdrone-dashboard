import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NOTAMComponent } from './components/notam/notam.component';
import { DronechartComponent } from './components/dronechart/dronechart.component';
import { WeatherradarComponent } from './components/weatherradar/weatherradar.component';
import { PilotresourcesComponent } from './components/pilotresources/pilotresources.component';
import { OperationalreportsComponent } from './components/operationalreports/operationalreports.component';
import { CompanynotamComponent } from './components/companynotam/companynotam.component';

@NgModule({
  declarations: [
    AppComponent,
    NOTAMComponent,
    DronechartComponent,
    WeatherradarComponent,
    PilotresourcesComponent,
    OperationalreportsComponent,
    CompanynotamComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
