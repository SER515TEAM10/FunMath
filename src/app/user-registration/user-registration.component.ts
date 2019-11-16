import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  url = 'http://localhost:8080/user/register';

  startDate = new Date(2000, 0, 1);

  fname = new FormControl('', Validators.required);
  lname = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]);
  gender = new FormControl();
  date = new FormControl();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    if (this.fname.invalid || this.lname.invalid || this.email.invalid || this.password.invalid) {
      this.snackBar.open('Invalid Details!', 'Dismiss', {
        duration: 1000,
      });
      return;
    } else {
      const obj = {
        'firstName': this.fname.value,
        'lastName': this.lname.value,
        'emailId': this.email.value,
        'password': this.password.value,
        'gender': this.gender.value,
        'dob': this.date.value != null ? this.date.value.toISOString().substring(0, 10) : null
      };
      console.log(obj);

      this.http.post(this.url, obj)
        .subscribe(
          res => {
            console.log('Res ', res);
            this.snackBar.open('Registration Successful!', 'Dismiss', {
              duration: 1000,
            });
          },
          err => {
            console.log('Error ', err);
            this.snackBar.open('Error in Registration!', 'Dismiss', {
              duration: 1000,
            });
          }

        );

      this.fname.reset();
      this.lname.reset();
      this.email.reset();
      this.password.setValue('');
      this.gender.reset();
      this.date.reset();
    }
  }
}
