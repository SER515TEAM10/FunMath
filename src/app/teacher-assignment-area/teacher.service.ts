import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import { QuestionModel } from './question-model';
import { catchError, map, tap } from 'rxjs/operators';

>>>>>>> 4c45ac3411fab45611816a34d5d0549cd0e7b3f4

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
<<<<<<< HEAD

  constructor() { }
=======
  private teacherUrl = 'http://localhost:8080/user'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { } 

  getQuestionByClassCategory(classNumber:number,category:string): Observable<QuestionModel> {
    const url = `${this.teacherUrl}/question/getByClassCategory`;
    const body = {"classNumber":classNumber,"category":category};
    return this.http.post<QuestionModel>(url,body).pipe(
      tap(_ => console.log(`questions fetched=`)),
      catchError(this.handleError<QuestionModel>(`getAllQuestions`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {    
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

>>>>>>> 4c45ac3411fab45611816a34d5d0549cd0e7b3f4
}
