import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDragRelease } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-student-canvas',
  templateUrl: './student-canvas.component.html',
  styleUrls: ['./student-canvas.component.scss']
})
export class StudentCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isComputed;

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
    console.log(this.canvas);
    for (let i = 0; i < this.canvas.length; i++) {

    }
    this.isComputed = 100;
  }
}
