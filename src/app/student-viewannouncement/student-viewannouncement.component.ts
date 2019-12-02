import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-viewannouncement',
  templateUrl: './student-viewannouncement.component.html',
  styleUrls: ['./student-viewannouncement.component.scss']
})
export class StudentViewannouncementComponent implements OnInit {

  url = 'https://funmath-backend.appspot.com/announcements/getAllByClass/';
  displayedColumns: string[] = ['announcementid', 'announcementtext'];
  dataSource;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url+localStorage.getItem('classNum'))
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
