import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

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
    if (this.fname.invalid || this.lname.invalid || this.email.invalid || this.password.invalid) {
      this._snackBar.open('Invalid Details!', 'Dismiss', {
        duration: 1000,
      });
      return;
    }
    else {
      let obj = {
        "firstName": this.fname.value,
        "lastName": this.lname.value,
        "emailId": this.email.value,
        "password": this.password.value,
        "gender": this.gender.value,
        "dob": this.date.value != null ? this.date.value.toISOString().substring(0, 10) : ''
      };
      console.log(obj);
      //TODO Send above data to backend and after success response execute code below

      this.fname.reset()
      this.lname.reset()
      this.email.reset()
      this.password.setValue('')
      this.gender.reset()
      this.date.reset()
      this._snackBar.open('Registration Successful!', 'Dismiss', {
        duration: 1000,
      });
    }
  }
}
