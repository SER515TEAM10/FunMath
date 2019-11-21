import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignmnet-view/assignment.service';
import { Assignment } from '../assignmnet-view/assignment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-submit',
  templateUrl: './assignment-submit.component.html',
  styleUrls: ['./assignment-submit.component.scss']
})
export class AssignmentSubmitComponent implements OnInit {
  assignments: Assignment[];
  selectedAssignment: Assignment;
  questionList: any[] = [];
  displayForm = false;
  submittedAnswerList: any[] = [];
  grades: number = 0;
  classNumber: number = 5;

  constructor(private assignmentService: AssignmentService) {
    this.displaySpecificAssignment();
  }

  ngOnInit() {

  }

  // getAssignment() {
  //   this.assignmentService.getAssignments(this.classNumber).subscribe((assignments) => { this.assignments = assignments; this.displaySpecificAssignment(9) });
  // }
  displaySpecificAssignment() {
    // for (let i in this.assignments) {
    //   if (assignmentId == this.assignments[i].assignmentId) {
    //     this.selectedAssignment = this.assignments[i];
    //     break;
    //   }
    // }
    this.questionList = JSON.parse(localStorage.getItem("questionList"));
    // console.log(this.questionList);
    this.displayForm = true;

  }
  submitAssignment(form: NgForm) {
    this.submittedAnswerList = form.value;
    for (let key in this.submittedAnswerList) {
      for (let i in this.questionList) {
        if (key == this.questionList[i].ID) {
          let submittedValue = this.submittedAnswerList[key];
          if (submittedValue == this.questionList[i].correctAnswer) {
            this.grades += 10;
          }

        }
      }
    }
    let requestBody = {
      "studentEmail": localStorage.getItem("emailId"),
      "assignmentNumber": localStorage.getItem("assignmentNumber"),
      "classNumber": +localStorage.getItem("classNumber"),
      "pointsScored": this.grades,
      "totalPoints":+localStorage.getItem("totalPoints")
    }
    console.log(requestBody);
    this.assignmentService.submitAssignment(requestBody).subscribe((value)=>(console.log(value)));
  }


}
