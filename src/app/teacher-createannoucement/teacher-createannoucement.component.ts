import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { HttpClient } from "@angular/common/http";

export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-teacher-createannoucement',
  templateUrl: './teacher-createannoucement.component.html',
  styleUrls: ['./teacher-createannoucement.component.scss']
})
export class TeacherCreateannoucementComponent implements OnInit {

  url = "http://funmath-backend.appspot.com/announcements/create";

  announce = new FormControl("", Validators.required);
  classselect = new FormControl("", Validators.required);

  classes: Class[] = [
    {value: '1', viewValue: 'Class 1'},
    {value: '2', viewValue: 'Class 2'},
    {value: '3', viewValue: 'Class 3'},
    {value: '4', viewValue: 'Class 4'},
    {value: '5', viewValue: 'Class 5'}
  ];

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
  }

  submitAnnouncement() {
    if (
      this.announce.invalid ||
      this.classselect.invalid
    ) {
      this.snackBar.open("Invalid Details!", "Dismiss", {
        duration: 1000
      });
      return;
    } else {
      const obj = {
        announcementText: this.announce.value,
        classNumber: this.classselect.value,
      };
      console.log(obj);

      this.http.post(this.url, obj).subscribe(
        res => {
          console.log("Res ", res);
          this.snackBar.open("Announcement Posted!", "Dismiss", {
            duration: 1000
          });
        },
        err => {
          console.log("Error ", err);
          this.snackBar.open("Error in Announcement", "Dismiss", {
            duration: 1000
          });
        }
      );

      this.announce.reset();
      this.announce.setErrors(null);
      this.classselect.reset();
      this.classselect.setErrors(null);
    }
  }
}