import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewGrades(): void {
    console.log("Inside viewGrades");
    this.router.navigateByUrl('grades', { skipLocationChange: true });
  }

  viewAssignment(): void {
    console.log("Inside viewAssignment");
    this.router.navigateByUrl('assignmnet', { skipLocationChange: true });
  }

  viewHistory(): void {
    console.log("Inside viewHistory");
    this.router.navigateByUrl('history', { skipLocationChange: true });
  }

  launchCanvas(): void {
    console.log("Inside launchcanvas");
    this.router.navigateByUrl('canvas', { skipLocationChange: true });
  }

}
