import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  display:boolean

  constructor() {
    this.display=false;
   }

  ngOnInit() {
    
  }
  countingProblems():void{
    this.display=!this.display;
    
  }

}
