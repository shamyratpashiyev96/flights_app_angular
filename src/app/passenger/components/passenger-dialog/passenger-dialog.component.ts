import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-dialog',
  templateUrl: './passenger-dialog.component.html',
  styleUrls: ['./passenger-dialog.component.scss']
})
export class PassengerDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      firstName: [null, Validators.required ],
      lastName: [null, Validators.required ]
    });
  }

  getFormValue() {
    return { ...this.form.value };
  }
}
