import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Assignment } from '../assignment';
import { AssignmentService } from '../assignment.service';
import { Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-assignmnet-view',
  templateUrl: './assignmnet-view.component.html',
  styleUrls: ['./assignmnet-view.component.scss']
})
export class AssignmnetViewComponent implements OnInit {

  Assignments: Assignment[];
  assignmentsSize: boolean;
  breakpoint: boolean;
  displayedColumns: string[] = ['id', 'name', 'creationDate', 'dueDate', 'marks'];
  displayedColumns1: string[] = ['id', 'name', 'creationDate', 'dueDate', 'marks', 'star'];

  constructor(private assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? true : false;
    this.getAssignments();
  }

  getAssignments(): void {
    this.assignmentService.getAssignments()
      .subscribe(
        assignments => {
          this.Assignments = assignments;
          console.log(this.Assignments);
          if (this.Assignments.length > 0) {
            this.assignmentsSize = true;
          } else {
            this.assignmentsSize = false;
          }
          console.log(this.assignmentsSize);
        }
      );
  }


}
