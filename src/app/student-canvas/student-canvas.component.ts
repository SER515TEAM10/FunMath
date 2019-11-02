import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDragRelease } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-student-canvas',
  templateUrl: './student-canvas.component.html',
  styleUrls: ['./student-canvas.component.scss']
})
export class StudentCanvasComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  isComputed;
  hasResult = false;

  canvas = [
  ];

  numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];

  basicOperations = [
    '+',
    '-',
    '*',
    '/'
  ];

  advancedOperations = [
    '>',
    '<',
    '>=',
    '<=',
    '=',
    '!='
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Do Nothing
    } else {
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }

  dropReplicate(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  calculate() {
    // double slash , trim 0
    let expression = this.canvas.toString();
    for (let i = 0; i < expression.length; i++) {
      expression = expression.replace(',', '');
    }
    try {
      this.isComputed = eval(expression);
      if (this.isComputed != null) {
        this.hasResult = true;
      }
    } catch (err) {
      this._snackBar.open(err, 'Dismiss', {
        duration: 3000,
      });
      this.hasResult = false;
    }
  }

  clear() {
    this.hasResult = false;
    this.canvas = []
  }
}
