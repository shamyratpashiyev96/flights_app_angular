import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PassengerComponent } from './passenger.component';
import { ListService } from '@abp/ng.core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PassengerComponent
  ],
  imports: [
    SharedModule,
    PassengerRoutingModule
  ],
  providers: [ 
    ListService
   ]
})
export class PassengerModule { }
