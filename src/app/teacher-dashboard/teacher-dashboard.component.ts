import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
  public router: Router;
  constructor(router: Router) { }

  ngOnInit() {
  }

  viewGrades() {

  }
  addAssignments() {
    this.router.navigateByUrl('add-assignment', { skipLocationChange: true });
  }
  publishAssignments() {
    this.router.navigateByUrl('publish-assignment', { skipLocationChange: true });
  }

}
