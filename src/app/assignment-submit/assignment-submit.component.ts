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
    this.getAssignment();
  }

  ngOnInit() {

  }

  getAssignment() {
    this.assignmentService.getAssignments(this.classNumber).subscribe((assignments) => { this.assignments = assignments; this.displaySpecificAssignment(9) });
  }
  displaySpecificAssignment(assignmentId: number) {
    for (let i in this.assignments) {
      if (assignmentId == this.assignments[i].assignmentId) {
        this.selectedAssignment = this.assignments[i];
        break;
      }
    }
    this.questionList = JSON.parse(this.selectedAssignment.questionList);
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
      "studentEmail": "sdhar@asu.edu",
      "assignmentNumber": this.selectedAssignment.assignmentNumber,
      "classNumber": this.classNumber,
      "pointsScored": this.grades
    }
    console.log(requestBody);
    this.assignmentService.submitAssignment(requestBody).subscribe((value)=>(console.log(value)));
  }


}
