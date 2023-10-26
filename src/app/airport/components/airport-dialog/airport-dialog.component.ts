import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";

@Component({
  selector: 'app-airport-dialog',
  templateUrl: './airport-dialog.component.html',
  styleUrls: ['./airport-dialog.component.scss'],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, width: '50vw',display:'none'},
    }
  ]
})
export class AirportDialogComponent implements OnInit {
  form : FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      city: [ null, Validators.required ],
      code: [ null, Validators.required ]
    });
  }

  getFormValue() {
    
    return {
      ...this.form.value
    };
  }

}
