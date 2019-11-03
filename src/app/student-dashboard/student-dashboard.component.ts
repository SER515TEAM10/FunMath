import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  breakpoint : number;

  ngOnInit() {
    console.log("Inside ngOnInit");
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
  }

  //Not working need to take a look again.
  onResize(event) {
    console.log("Inside Resize");
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
  }

  viewGrades(): void {
    console.log("Inside viewGrades");
    this.router.navigateByUrl('grades', { skipLocationChange: true });
  }

  viewAssignment(): void {
    console.log("Inside viewAssignment");
    this.router.navigateByUrl('assignmentview', { skipLocationChange: true });
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
