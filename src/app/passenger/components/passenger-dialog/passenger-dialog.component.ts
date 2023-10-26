import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PassengerDto } from '@proxy/passengers';

@Component({
  selector: 'app-passenger-dialog',
  templateUrl: './passenger-dialog.component.html',
  styleUrls: ['./passenger-dialog.component.scss']
})
export class PassengerDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: PassengerDto
    ){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      firstName: [ this.data?.firstName, Validators.required ],
      lastName: [ this.data?.lastName, Validators.required ]
    });
  }

  getFormValue() {
    return { ...this.form.value };
  }
}
