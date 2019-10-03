import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Location } from '@angular/common';
import { Users } from '../mock-users';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  Users: User[];
  selectedUsers: number[] = [];
  UsersSize: boolean = false;

  constructor(private usersService: UsersService, private location: Location) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.Users = this.usersService.getUsers();
    if (this.Users.length > 0) {
      this.UsersSize = true;
    }else{
      this.UsersSize = false;
    }
    console.log(this.UsersSize);
  }

  delete(user: User): void {
    if (confirm("Are you sure, Do you want to delete the user ?")){
      
      if (this.usersService.deleteUser(user.userid)) {
        alert("User Deleted Successfully.");
      }else{
        alert("Something went wrong");
      }
      this.Users = this.usersService.getUsers();

    }
  }

  search(nameOrId: string): void {
    this.Users = this.usersService.getUser(nameOrId);
    if (this.Users.length > 0) {
      this.UsersSize = true;
    }else{
      this.UsersSize = false;
    }
    console.log(this.UsersSize);
    this.selectedUsers = [];
  }

  updateCheck(userid: number): void {
    if (this.selectedUsers.indexOf(userid) >= 0) {
      this.selectedUsers.splice(this.selectedUsers.indexOf(userid),1);
    }else{
      this.selectedUsers.push(userid);
    }
    console.log(this.selectedUsers);
  }

  deleteSelected(): void {
    if (this.selectedUsers.length == 0) {
      alert("Please select atleast one user.")
      return;
    }
    if (confirm("Do you want to delete the users ?")){
      
      alert(this.usersService.deleteUsers(this.selectedUsers))
      this.Users = this.usersService.getUsers();
      this.selectedUsers  = [];
    }
    
  }

  goBack(): void {
    this.location.back();
    
  }

}
