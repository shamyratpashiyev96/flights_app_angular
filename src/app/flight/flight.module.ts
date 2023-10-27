import { NgModule } from '@angular/core';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FlightComponent
  ],
  imports: [
    SharedModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
