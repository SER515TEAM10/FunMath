import { Component, OnInit, Input } from "@angular/core";
import { TeacherAssignmentAreaComponent } from "src/app/teacher-assignment-area/teacher-assignment-area.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
  NgForm
} from "@angular/forms";

@Component({
  selector: "app-class5",
  templateUrl: "./class5.component.html",
  styleUrls: ["./class5.component.scss"]
})
export class Class5Component implements OnInit {
  public selected: string;
  public selectedList: any;
  public assignmentList: any[] = [];
  public questionList: any;
  public mulndivQL = [
    {
      number: "1",
      description: "Add the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q1.jpg" }],
      descquestion: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" },
          { answertext: "Value of c", answerunit: "" }
        ]
      }
    }
  ];
  public addnsubQL = [
    {
      ID: "c5s1q1",
      number: "1",
      description: "Add the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q1.jpg" }],
      descquestion: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" },
          { answertext: "Value of c", answerunit: "" }
        ]
      }
    },
    {
      ID: "c5s1q2",
      number: "2",
      description:
        "Subtract the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q2.jpg" }],
      descquestion: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" }
        ]
      }
    },
    {
      ID: "c5s1q3",
      number: "3",
      description:
        "Write down two numbers from the box to complete the addition sentence",
      images: [{ name: "../../assets/c5s1/c5s1q3.jpg" }],
      descquestion: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "The two numbers", answerunit: "and" },
          { answertext: "", answerunit: "have sum of 413." }
        ]
      }
    },
    {
      ID: "c5s1q4",
      number: "4",
      description: "Word problem",
      images: [],
      descquestion:
        "Last year, apple producers in XYZ county produced 7074 apples. \nThis year, those same farms produced 9898 apples.\nHow many more apples did the farms produce this year?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "apples" }]
      }
    },
    {
      ID: "c5s1q5",
      number: "5",
      description: "Word problem",
      images: [],
      descquestion:
        "A treasure hunter discovered a buried treasure with 7005 gems. 88 of the gems were diamonds, and the rest were rubies. How many rubies were there?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "rubies" }]
      }
    },
    {
      ID: "c5s1q6",
      number: "6",
      description: "Word problem",
      images: [],
      descquestion:
        "Yoshi is a beekeeper. Last year, he harvested 1220 kilograms of honey. This year he bought some new hives and increased the harvest by 1885 kilograms. How many kilograms of honey did Yoshi harvest this year?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "kilograms" }]
      }
    }
  ];

  @Input() classSelected: string;
  public showDialog: boolean;

  callThisMethod(selected): boolean {
    if (selected == "c5s1") {
      this.questionList = this.addnsubQL;
    } else if (selected == "c5s2") {
      this.questionList = this.mulndivQL;
    } else {
      return false;
    }
    return true;
  }
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  createAssignment(e: NgForm) {
    console.log("Assignment Created");
    this.selectedList = e.value;
    console.log(this.selectedList);
    for (let key in this.selectedList) {
      let value = this.selectedList[key];
      if (value == true) {
        this.assignmentList.push(key);
      }
    }
    this.openDialog();
    console.log(this.assignmentList);
    e.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {});
    this.showDialog = true;
  }
}

@Component({
  selector: "confirmation-dialog",
  templateUrl: "confirmation-dialog.html"
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) {}

  onOKClick(): void {
    console.log("asdasd");
    this.dialogRef.close();
  }
}
