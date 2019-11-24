import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-viewannouncement',
  templateUrl: './teacher-viewannouncement.component.html',
  styleUrls: ['./teacher-viewannouncement.component.scss']
})
export class TeacherViewannouncementComponent implements OnInit {

  url = 'http://localhost:8080/announcements/getAll';
  displayedColumns: string[] = ['announcementid', 'announcementtext', 'class'];
  dataSource;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
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
