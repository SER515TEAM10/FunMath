import { Component, OnInit } from '@angular/core';

export interface GradedAssignments {
  name: string;
  position: number;
  marks: number;
  total: number;
}

const GRADES_DATA: GradedAssignments[] = [
  {position: 1, name: 'Assignment1', marks: 90, total: 100},
  {position: 2, name: 'Assignment2', marks: 90, total: 100},
  {position: 3, name: 'Assignment3', marks: 90, total: 100},
  {position: 4, name: 'Assignment4', marks: 90, total: 100}
];

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'marks', 'total'];
  dataSource = GRADES_DATA;
  constructor() { }

  ngOnInit() {
    
  }

}
