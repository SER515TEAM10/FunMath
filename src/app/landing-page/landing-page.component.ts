import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('', { skipLocationChange: true })
  }

  goLogin() {
    this.router.navigateByUrl('login', { skipLocationChange: true })
  }

  goRegister() {
    this.router.navigateByUrl('register', { skipLocationChange: true })
  }

}
