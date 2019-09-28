import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  email = new FormControl();
  password = new FormControl();
  userType : String

  login() {
    console.log('Login function')
    //TODO send credentials to backend and validate
    this.userType = 'admin' //Dummy success
    if(this.userType === 'admin'){
      this.router.navigateByUrl('admindash',{skipLocationChange: true})
    }
  }
}
