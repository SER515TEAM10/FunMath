import { User } from './user';
import { Users } from './mock-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // getUsers(): User[] {
  //   return Users;
  // }

  getUsers(): Observable<User[]> {
    //return of(Users);
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched Users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  // getUserById(userid: number): User {
  //   var returnuser: User;
  //   Users.forEach(user => {      
  //     if(user.userid == +userid){
  //       returnuser = user;
  //       return false;    
  //     }
  //   });
  //   return returnuser;
  // }

  /** GET user by id. Will 404 if id not found */
  getUserById(userid: number): Observable<User> {
    const url = `${this.usersUrl}/${userid}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${userid}`)),
      catchError(this.handleError<User>(`getUserById id=${userid}`))
    );
  }

  

  searchUser(nameOrId: string): User[] {
    var searchUsers: User[] = [];
    Users.forEach(user => {
      if( (user.userid == +nameOrId) || (user.name == nameOrId) ){
        searchUsers.push(user);
      }      
    });
    return searchUsers;
  }

  
  deleteUser(userid: number): Observable<Boolean> {     
    const url = `${this.usersUrl}/delete/${userid}`;
    return this.http.get<Boolean>(url).pipe(
      tap(_ => console.log(`fetched user id=${userid}`)),
      catchError(this.handleError<Boolean>(`getUserById id=${userid}`))
    );
    // var deleted: boolean = false;
    // var index = 0
    // Users.forEach(user => {
      
    //   if(user.userid == +userid){
    //     Users.splice(index,1);
    //     deleted = true;        
    //   }      
    //   if (deleted) {
    //     return false;
    //   }
    //   index += 1;
    // });
    // return of(deleted)
  }

  deleteUsers(userids: number[]): string {
    var index = 0;
    var count = 0;
    //var userlist = Users;
    userids.forEach(userid => {
      
      if(this.deleteUser(userid)){
        count += 1;
      }      
      index += 1;
    });
    var returnMessage = count + " out of " + userids.length + " deleted succesfully."
    return returnMessage;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
