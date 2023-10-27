import { PagedResultDto } from '@abp/ng.core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AirportDto, AirportService } from '@proxy/airports';
import { FlightDto } from '@proxy/flights';

@Component({
  selector: 'app-flight-dialog',
  templateUrl: './flight-dialog.component.html',
  styleUrls: ['./flight-dialog.component.scss'],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: true, width: '50vw'}
    }
  ],
})
export class FlightDialogComponent implements OnInit{
  form: FormGroup
  airports: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: FlightDto,
    private airportService: AirportService,
  ){
    this.airportService.getList({maxResultCount:10}).subscribe((result)=>{
      this.airports = result.items;
    });

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      originId: [null, Validators.required],
      destinationId: [null, Validators.required],
      departureDate: [null, Validators.required],
      arrivalDate: [null, Validators.required]
    });
  }

  getFormValue(){
    return {
      ...this.form.value
    }
  }
}
