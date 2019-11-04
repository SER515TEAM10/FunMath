import { Component, OnInit } from '@angular/core';

export interface GradedAssignments {
  name: string;
  position: number;
  marks: number;
  total: number;
  comments: string;
}

const GRADES_DATA: GradedAssignments[] = [
  { position: 1, name: 'Addition Assignment', marks: 100, total: 100, comments: 'Good job' },
  { position: 2, name: 'Subtraction Assignment', marks: 60, total: 100, comments: 'Work harder next time' },
  { position: 3, name: 'Multiplication Assignment', marks: 90, total: 100, comments: 'Nice' },
  { position: 4, name: 'Division Assignment', marks: 100, total: 100, comments: 'Amazing' }
];

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'marks', 'total', 'comments'];
  dataSource = GRADES_DATA;
  constructor() { }

  ngOnInit() {

  }

}
