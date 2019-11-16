import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-first-grade',
  templateUrl: './student-first-grade.component.html',
  styleUrls: ['./student-first-grade.component.scss']
})
export class StudentFirstGradeComponent implements OnInit {
  public i: number = 0;
  public question: any;
  public countingQuestions = [
    {
      number: "1",
      desc: "Count number of balls",
      images: [
        {
          name: "counting/ball2.jpg"
        },
        {
          name: "counting/ball2.jpg"
        },
        {
          name: "counting/ball2.jpg"
        },
        {
          name: "counting/ball2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "counting/1.jpg",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "counting/2.jpg",
            desc: ""
          },
          {
            id: "3",
            name: "",
            image: "counting/3.jpg",
            desc: ""
          }
        ]
      }
    },
    {
      number: "2",
      desc: "Count number of doughnuts",
      images: [
        {
          name: "counting/doughnut.png"
        },
        {
          name: "counting/doughnut.png"
        },
        {
          name: "counting/doughnut.png"
        },
        {
          name: "counting/doughnut.png"
        },
        {
          name: "counting/doughnut.png"
        },
        {
          name: "counting/doughnut.png"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "counting/1.jpg",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "counting/2.jpg",
            desc: ""
          },
          {
            id: "3",
            name: "",
            image: "counting/3.jpg",
            desc: ""
          }
        ]
      }
    }
  ]
  public patternQuestions = [
    {
      number: "1",
      desc: "What number comes next in the given pattern?",
      images: [
        {
          name: "counting/1.jpg"
        },
        {
          name: "counting/2.jpg"
        },
        {
          name: "counting/2.jpg"
        },
        {
          name: "counting/1.jpg"
        },
        {
          name: "counting/2.jpg"
        },
        {
          name: "counting/2.jpg"
        },
        {
          name: "counting/qmark.jpg"
        }
      ],
      answers: {
        type: "image",
        buttons: [
          {
            id: "1",
            name: "",
            image: "counting/1.jpg",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "counting/2.jpg",
            desc: ""
          }
        ]
      }      
    },
    {
      number: "2",
      desc: "What number comes next in the given pattern?",
      images: [
        {
          name: "counting/5.jpg"
        },
        {
          name: "counting/1.jpg"
        },
        {
          name: "counting/6.jpg"
        },
        {
          name: "counting/5.jpg"
        },
        {
          name: "counting/1.jpg"
        },
        {
          name: "counting/6.jpg"
        },
        {
          name: "counting/5.jpg"
        },
        {
          name: "counting/1.jpg"
        },
        {
          name: "counting/qmark.jpg"
        }
      ],
      answers: {
        type: "image",
        buttons: [
          {
            id: "1",
            name: "",
            image: "counting/1.jpg",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "counting/2.jpg",
            desc: ""
          }
        ]
      }
    }

  ]

  test_for_pattern = false; 
  buttonselected: string
  labelstringC1S1Q1: string
  labelstringC1S1Q2: string
  labelstringC1S7Q1: string
  labelstringC1S7Q2: string
  constructor() {   
    this.labelstringC1S1Q1 = "";
    this.labelstringC1S1Q2 = "";
    this.labelstringC1S7Q1 = "";
    this.labelstringC1S7Q2 = "";
  }

  ngOnInit() {
  }
  countingProblems(): void {
    this.test_for_pattern = true;
    this.question = this.countingQuestions;
    this.i = 0;
  }
  patternProblems(): void {
    this.test_for_pattern = true;
    this.question = this.patternQuestions;
    this.i = 0;
  }


  changeLabelNameC1S1Q1(buttonselected) {
    if (buttonselected == '4') {
      this.labelstringC1S1Q1 = "Correct";
    }
    else {
      this.labelstringC1S1Q1 = "Incorrect";
    }
    return this.labelstringC1S1Q1;
  }

  changeLabelNameC1S1Q2(buttonselected) {
    if (buttonselected == '10') {
      this.labelstringC1S1Q2 = "Correct";
    }
    else {
      this.labelstringC1S1Q2 = "Incorrect";
    }
    return this.labelstringC1S1Q2;
  }

  changeLabelNameC1S7Q1(buttonselected) {
    if (buttonselected == '2') {
      this.labelstringC1S7Q1 = "Correct";
    }
    else {
      this.labelstringC1S7Q1 = "Incorrect";
    }
    return this.labelstringC1S7Q1;
  }

  changeLabelNameC1S7Q2(buttonselected) {
    if (buttonselected == '6') {
      this.labelstringC1S7Q2 = "Correct";
    }
    else {
      this.labelstringC1S7Q2 = "Incorrect";
    }
    return this.labelstringC1S7Q2;
  }
  // goToNextQuestion(questionNumber: string) {
  //   if (questionNumber == "displayPattern_2") {
  //     this.displayPatterns_2 = true;
  //   } else if (questionNumber == "displayCounting_2") {
  //     this.displayCounting_2 = true;
  //   }

  // }

}
