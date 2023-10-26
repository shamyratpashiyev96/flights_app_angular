import { NgModule } from '@angular/core';

import { AirportRoutingModule } from './airport-routing.module';
import { AirportComponent } from './airport.component';
import { SharedModule } from '../shared/shared.module';
import { ListService } from '@abp/ng.core';
import { AirportDialogComponent } from './components/airport-dialog/airport-dialog.component';


@NgModule({
  declarations: [
    AirportComponent,
    AirportDialogComponent
  ],
  imports: [
    SharedModule,
    AirportRoutingModule
  ],
  providers: [
    ListService
  ]
})
export class AirportModule { }
