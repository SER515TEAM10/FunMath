import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface GradedAssignments {
//   name: string;
//   position: number;
//   marks: number;
//   total: number;
//   comments: string;
// }

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit {

  url = 'http://localhost:8080/studentgrades/search/';
  displayedColumns: string[] = ['position', 'name', 'marks', 'total', 'comments'];
  dataSource;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url+localStorage.getItem('userId'))
        .subscribe(
          res => {
              console.log(res)
              this.dataSource = res
          },
          err => {
            console.log("Error")
          }

        );
  }
}
