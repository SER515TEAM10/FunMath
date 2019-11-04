import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { stringToKeyValue } from "@angular/flex-layout/extended/typings/style/style-transforms";

@Component({
  selector: "app-teacher-assignment-area",
  templateUrl: "./teacher-assignment-area.component.html",
  styleUrls: ["./teacher-assignment-area.component.scss"]
})
export class TeacherAssignmentAreaComponent implements OnInit {
  constructor(private router: Router) { }
  public linkClicked;
  //checkClass = 'isClass1s1';

  ngOnInit() { }

  // public displayclass1s1() {
  //   localStorage.setItem("isClass1", "S1");
  //   window.location.reload();
  // }

  // public displayclass1s2() {
  //   localStorage.setItem("isClass1", "S2");
  //   window.location.reload();
  // }
}
