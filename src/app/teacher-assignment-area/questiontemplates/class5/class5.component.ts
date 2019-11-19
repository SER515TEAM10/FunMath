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
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-class5",
  templateUrl: "./class5.component.html",
  styleUrls: ["./class5.component.scss"]
})
export class Class5Component implements OnInit {
  date = new FormControl();
  startDate = new Date();
  public selected: string;
  public selectedList: any;
  public assignmentList: any[] = [];
  public questionList: any;
  public request: any[] = [];
  public jsonString: string = "";
  public jsonArr: any[] = [];
  public mulndivQL = [
    {
      number: "1",
      description: "Add the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q1.jpg" }],
      extradescription: "",
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
      description: "Add the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q1.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" },
          { answertext: "Value of c", answerunit: "" }
        ]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q2",
      description:
        "Subtract the following numbers and find the unknown entities",
      images: [{ name: "../../assets/c5s1/c5s1q2.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "Value of a", answerunit: "" },
          { answertext: "Value of b", answerunit: "" }
        ]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q3",
      description:
        "Write down two numbers from the box to complete the addition sentence",
      images: [{ name: "../../assets/c5s1/c5s1q3.jpg" }],
      extradescription: "",
      answers: {
        type: "textbox",
        fields: [
          { answertext: "The two numbers", answerunit: "and" },
          { answertext: "", answerunit: "have sum of 413." }
        ]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q4",
      description: "Word problem",
      images: [],
      extradescription:
        "Last year, apple producers in XYZ county produced 7074 apples. \nThis year, those same farms produced 9898 apples.\nHow many more apples did the farms produce this year?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "apples" }]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q5",
      description: "Word problem",
      images: [],
      extradescription:
        "A treasure hunter discovered a buried treasure with 7005 gems. 88 of the gems were diamonds, and the rest were rubies. How many rubies were there?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "rubies" }]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
      }
    },
    {
      ID: "c5s1q6",
      description: "Word problem",
      images: [],
      extradescription:
        "Yoshi is a beekeeper. Last year, he harvested 1220 kilograms of honey. This year he bought some new hives and increased the harvest by 1885 kilograms. How many kilograms of honey did Yoshi harvest this year?",
      answers: {
        type: "textbox",
        fields: [{ answertext: "", answerunit: "kilograms" }]
      },
      correctAnswers: {
        type: "textbox",
        fields: [{ actualanswer: "" }]
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
  constructor(public dialog: MatDialog) {
    //console.log(JSON.stringify(this.addnsubQL));
  }

  ngOnInit() {}

  createAssignment(e: NgForm) {
    console.log("Assignment Created");
    this.selectedList = e.value;
    console.log(this.selectedList);
    // duedate: this.date.value != null
    //   ? this.date.value.toISOString().substring(0, 10)
    //   : null;

    for (let key in this.selectedList) {
      let value = this.selectedList[key];
      if (value == true) {
        this.assignmentList.push(key);
      }
    }

    for (let i in this.questionList) {
      for (let j in this.assignmentList) {
        if (this.questionList[i].ID == this.assignmentList[j]) {
          this.jsonArr.push(this.questionList[i]);
        }
      }
    }
    console.log(this.jsonArr);
    console.log(JSON.stringify(this.jsonArr));

    this.openDialog();
    console.log(this.assignmentList);
    // this.request = {
    //   assignmentNumber: 1,
    //   questionId: 1,
    //   classNumber: 1,
    //   dueDate: "2019-11-25",
    //   totalPoints: 100,
    //   questions: JSON.stringify(this.assignmentList)
    // };
    console.log(JSON.stringify(this.assignmentList));

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
    //console.log("asdasd");
    this.dialogRef.close();
  }
}
