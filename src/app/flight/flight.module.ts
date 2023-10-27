import { NgModule } from '@angular/core';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { SharedModule } from '../shared/shared.module';
import { FlightDialogComponent } from './components/flight-dialog/flight-dialog.component';


@NgModule({
  declarations: [
    FlightComponent,
    FlightDialogComponent
  ],
  imports: [
    SharedModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
