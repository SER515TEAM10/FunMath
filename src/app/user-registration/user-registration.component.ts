import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startDate = new Date(2000, 0, 1);

  fname = new FormControl('', Validators.required);
  lname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]);
  gender = new FormControl()
  date = new FormControl()

  register() {
    let obj = {
      "First Name": this.fname.value,
      "Last Name": this.lname.value,
      "Email": this.email.value,
      "Password": this.password.value,
      "Gender": this.gender.value,
      "DOB": this.date.value != null ? this.date.value.toISOString().substring(0, 10) : ''
    };
    console.log(obj);
  }
}
