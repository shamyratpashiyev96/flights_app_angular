import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PassengerComponent } from './passenger.component';
import { ListService } from '@abp/ng.core';
import { SharedModule } from '../shared/shared.module';
import { PassengerDialogComponent } from './components/passenger-dialog/passenger-dialog.component';


@NgModule({
  declarations: [
    PassengerComponent,
    PassengerDialogComponent
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
