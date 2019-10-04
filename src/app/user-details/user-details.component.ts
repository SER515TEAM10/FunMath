import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { Users } from '../mock-users';

import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) { }

  user: User;
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = this.usersService.getUserById(id);
  }

  goBackToUserSearch(): void {
    this.router.navigateByUrl('/usersearch', { skipLocationChange: true });
    
  }
}
