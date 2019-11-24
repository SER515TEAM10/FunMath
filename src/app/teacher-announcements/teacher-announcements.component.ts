import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-announcements',
  templateUrl: './teacher-announcements.component.html',
  styleUrls: ['./teacher-announcements.component.scss']
})
export class TeacherAnnouncementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  createAnnouncement() {
    this.router.navigateByUrl('teacherCreateAnnouncement', { skipLocationChange: true });
  }
  viewStudentInfo() {

  }
  addAssignments() {
    this.router.navigateByUrl('add-assignment', { skipLocationChange: true });
  }
}