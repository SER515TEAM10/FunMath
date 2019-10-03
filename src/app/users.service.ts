import { User } from './user';
import { Users } from './mock-users';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[] {
    return Users;
  }

  searchUsers: User[] = [];

  getUser(nameOrId: string): User[] {
    this.searchUsers = [];
    Users.forEach(user => {
      if( (user.userid == +nameOrId) || (user.name == nameOrId) ){
        this.searchUsers.push(user);
      }      
    });
    return this.searchUsers;
  }

  
  deleteUser(userid: number): boolean {     
    var deleted: boolean = false;
    var index = 0
    Users.forEach(user => {
      
      if(user.userid == +userid){
        Users.splice(index,1);
        deleted = true;        
      }      
      if (deleted) {
        return false;
      }
      index += 1;
    });
    return deleted
  }

  deleteUsers(userids: number[]): string {
    var index = 0;
    var count = 0;
    Users.forEach(user => {
      
      if(userids.indexOf(user.userid) >= 0){
        Users.splice(index,1);
        count += 1;
      }      
      index += 1;
    });
    var returnMessage = count + " out of " + userids.length + " deleted succesfully."
    return returnMessage;
  }
}
