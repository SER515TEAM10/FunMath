import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email = new FormControl();
  password = new FormControl();

  login() {
    console.log('Login function')
  }
}
