import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PrivilegeRequestDialog);

    dialogRef.afterClosed().subscribe(result => {
      // if ${result} == true then call API
    });
  }
  //Not working need to take a look again.
  onResize(event) {
    console.log("Inside Resize");
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
  }

  viewGrades(): void {
    console.log("Inside viewGrades");
    this.router.navigateByUrl('studentgradesdash', { skipLocationChange: true });
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

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}

@Component({
  selector: 'privilege-request-dialog',
  templateUrl: 'privilege-request-dialog.html',
})
export class PrivilegeRequestDialog { }
