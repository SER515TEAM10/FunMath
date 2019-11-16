import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { stringToKeyValue } from "@angular/flex-layout/extended/typings/style/style-transforms";

@Component({
  selector: "app-teacher-assignment-area",
  templateUrl: "./teacher-assignment-area.component.html",
  styleUrls: ["./teacher-assignment-area.component.scss"]
})
export class TeacherAssignmentAreaComponent implements OnInit {
  public linkClicked: string;
  constructor(private router: Router) {}

  ngOnInit() {}
}
