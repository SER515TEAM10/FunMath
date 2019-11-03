import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, public authService: AuthService, private _snackBar: MatSnackBar) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this._snackBar.open('Invalid Details!', 'Dismiss', {
        duration: 1000,
      });
      return;
    }
    else {
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', 'Dhananjay');
      localStorage.setItem('userType', 'Student');
      window.location.reload();
    }
  }
}
