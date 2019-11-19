import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-first-grade",
  templateUrl: "./student-first-grade.component.html",
  styleUrls: ["./student-first-grade.component.scss"]
})
export class StudentFirstGradeComponent implements OnInit {
  public i: number = 0;
  public question: any;
  public countingQuestions = [
    {
      number: "1",
      desc: "Count the total number of doughnuts you can see",
      images: [
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        },
        {
          name: "class1/doughnut.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "3",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "5",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "6",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "7",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "8",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "9",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "10",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "2",
      desc: "Select the box that displays 4 alarm clocks ",
      images: [
        {
          name: "class1/c1s1q1.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "C",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "3",
      desc:
        "A full frame has 10 hearts. How many more hearts do you need to make 10?",
      images: [
        {
          name: "class1/c1s1q2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "3",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "5",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "6",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "7",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "8",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "9",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "10",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "4",
      desc:
        "Count the total number of blocks. Then fill in the missing numbers.",
      images: [
        {
          name: "class1/c1s1q3.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [
          { answertext: "", answerunit: "tens + " },
          { answertext: "", answerunit: "ones = 14 " }
        ]
      }
    },
    {
      number: "5",
      desc: "Is the number of flowers even or odd?",
      images: [
        {
          name: "class1/c1s1q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Even",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Odd",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "6",
      desc: "Count the paws by 2s?",
      images: [
        {
          name: "class1/c1s1q5.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [
          { answertext: "How many paws are there in all?   ", answerunit: "" }
        ]
      }
    },
    {
      number: "7",
      desc: "How do you write this number using words?  23 ",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Twenty Three",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Nineteen",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Twenty",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Two Three",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "8",
      desc: "Count the total number number of balls",
      images: [
        {
          name: "class1/ball2.jpg"
        },
        {
          name: "class1/ball2.jpg"
        },
        {
          name: "class1/ball2.jpg"
        },
        {
          name: "class1/ball2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "5",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "8",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    }
  ];
  public additionQuestions = [
    {
      number: "1",
      desc:
        "There is 1 orange cube and 5 blue cubes. Add to find how many cubes there are in all.",
      images: [
        {
          name: "class1/c1s2q1.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: " 1 + 5 = ", answerunit: "" }]
      }
    },
    {
      number: "2",
      desc: "ADD",
      images: [
        {
          name: "class1/c1s2q2.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: " 1 + 5 = ", answerunit: "" }]
      }
    },
    {
      number: "3",
      desc: "Which shows 2 + 5 = 7 ?",
      images: [
        {
          name: "class1/c1s2q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "First",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Second",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Both",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "4",
      desc: "Which addition sentence does the picture show?",
      images: [
        {
          name: "class1/c1s2q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "2 + 3 = 5",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "3 + 3 = 6",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "3 + 4 = 7",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "5",
      desc: "3 and 2 make 5.",
      images: [],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "Write this as an addition sentence (using + amd =)",
            answerunit: ""
          }
        ]
      }
    }
  ];
  public subtractionQuestions = [
    {
      number: "1",
      desc:
        "Here are 7 cubes in all. Take away 3 green cubes. Write down how many cubes remain.",
      images: [
        {
          name: "class1/c1s3q1.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: "Subtract:   7 - 3 = ", answerunit: "" }]
      }
    },
    {
      number: "2",
      desc: "SUBTRACT",
      images: [
        {
          name: "class1/c1s3q2.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [{ answertext: " 7 - 3 = ", answerunit: "" }]
      }
    },
    {
      number: "3",
      desc: "Which picture shows 4 - 3 = 1 ?",
      images: [
        {
          name: "class1/c1s3q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "First",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Second",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Third",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Fourth",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "4",
      desc: "Write a subtraction sentence based on the picture (For ex: 3-1=2)",
      images: [
        {
          name: "class1/c1s3q4.jpg"
        }
      ],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "",
            answerunit: ""
          }
        ]
      }
    },
    {
      number: "5",
      desc: "6 take away 4 is 2",
      images: [],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "Write this as a subtraction sentence (using - amd =)",
            answerunit: ""
          }
        ]
      }
    }
  ];
  public mixedOpQuestions = [
    {
      number: "1",
      desc: "How do you make 7?",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "3 + 3",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "1 + 6",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "2 + 6",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "8 - 2",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "2",
      desc: "Which sign is missing in the place of question mark.  5 ? 1 = 4",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "+",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "-",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "3",
      desc:
        "8 of the pairs of shoes in a particular shoe store are black. There are 11 pair of shoes in the store in all. How many of the pairs of shoes are not black? ",
      images: [],
      answers: {
        type: "textbox",
        fields: [
          {
            answertext: "",
            answerunit: "  pairs of shoes"
          }
        ]
      }
    },
    {
      number: "4",
      desc: "In this problem, what is 45?",
      images: [
        {
          name: "class1/c1s4q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Difference",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Sum",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "5",
      desc: "How do you make 12?",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "7 + 4",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "2 + 11",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "16 - 4",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "11 - 0",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    }
  ];
  public comparisonQuestions = [
    {
      number: "1",
      desc: "Which group has fewer?",
      images: [
        {
          name: "class1/c1s5q1.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "First",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Second",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "2",
      desc: "Which words make this statement true?  9 __ 7 ",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: " is greater than ",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: " is less than ",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: " is equal to ",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "3",
      desc: "Which sign makes this statement true?  8 __ 8 ",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: " > ",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: " = ",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: " < ",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "4",
      desc:
        "Oscar has fewer dogs than Annie does. If Annie has 3 dogs, how many dogs can Oscar possibly have?",
      images: [],
      answers: {
        type: "button",
        buttons: [
          {
            id: "2",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "5",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    }
  ];
  public measurementQuestions = [
    {
      number: "1",
      desc: "Which building is the shortest?",
      images: [
        {
          name: "class1/c1s6q1.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "C",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "2",
      desc: "Which lighthouse is the widest?",
      images: [
        {
          name: "class1/c1s6q2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "C",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "3",
      desc: "Which is lighter? ",
      images: [
        {
          name: "class1/c1s6q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "4",
      desc: "Which bag holds more?",
      images: [
        {
          name: "class1/c1s6q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "A",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "B",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "5",
      desc: "Which is a better estimate for the length of a house key?",
      images: [
        {
          name: "class1/c1s6q5.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "3 inches",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "3 feet",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    }
  ];
  public patternQuestions = [
    {
      number: "1",
      desc: "What number comes next in the given pattern?",
      images: [
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/2.jpg"
        },
        {
          name: "class1/qmark.jpg"
        }
      ],
      answers: {
        type: "image",
        buttons: [
          {
            id: "1",
            name: "",
            image: "class1/1.jpg",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "class1/2.jpg",
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
          name: "class1/5.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/6.jpg"
        },
        {
          name: "class1/5.jpg"
        },
        {
          name: "class1/1.jpg"
        },
        {
          name: "class1/6.jpg"
        },
        {
          name: "class1/5.jpg"
        },
        {
          name: "class1/1.jpg"
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
            image: "class1/1.jpg",
            desc: ""
          },
          {
            id: "5",
            name: "",
            image: "class1/5.jpg",
            desc: ""
          },
          {
            id: "6",
            name: "",
            image: "class1/6.jpg",
            desc: ""
          }
        ]
      }
    }
  ];
  public shapesQuestions = [
    {
      number: "1",
      desc: "What shape is this?",
      images: [
        {
          name: "class1/c1s8q1.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Triangle",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Square",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Rectangle",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "2",
      desc: "Pick all the circles",
      images: [
        {
          name: "class1/c1s8q2.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "2, 3, 5",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "1",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "1, 5, 6",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "1, 6",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "3",
      desc: "Which shape has 5 corners? ",
      images: [
        {
          name: "class1/c1s8q3.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1, 3",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "1",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "4",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "4",
      desc: "Which shape has 3 equal sides?",
      images: [
        {
          name: "class1/c1s8q4.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "1",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "2",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    },
    {
      number: "5",
      desc: "Is this shape open or closed?",
      images: [
        {
          name: "class1/c1s8q5.jpg"
        }
      ],
      answers: {
        type: "button",
        buttons: [
          {
            id: "Open",
            name: "",
            image: "",
            desc: ""
          },
          {
            id: "Closed",
            name: "",
            image: "",
            desc: ""
          }
        ]
      }
    }
  ];

  test_for_pattern = false;
  buttonselected: string;
  labelstringC1S1Q1: string;
  labelstringC1S1Q2: string;
  labelstringC1S7Q1: string;
  labelstringC1S7Q2: string;
  constructor() {
    this.labelstringC1S1Q1 = "";
    this.labelstringC1S1Q2 = "";
    this.labelstringC1S7Q1 = "";
    this.labelstringC1S7Q2 = "";
  }

  ngOnInit() {}
  countingProblems(): void {
    this.test_for_pattern = true;
    this.question = this.countingQuestions;
    this.i = 0;
  }
  additionProblems(): void {
    this.test_for_pattern = true;
    this.question = this.additionQuestions;
    this.i = 0;
  }
  subtractionProblems(): void {
    this.test_for_pattern = true;
    this.question = this.subtractionQuestions;
    this.i = 0;
  }
  mixedOpProblems(): void {
    this.test_for_pattern = true;
    this.question = this.mixedOpQuestions;
    this.i = 0;
  }
  comparisonProblems(): void {
    this.test_for_pattern = true;
    this.question = this.comparisonQuestions;
    this.i = 0;
  }
  measurementProblems(): void {
    this.test_for_pattern = true;
    this.question = this.measurementQuestions;
    this.i = 0;
  }
  patternProblems(): void {
    this.test_for_pattern = true;
    this.question = this.patternQuestions;
    this.i = 0;
  }
  shapesProblems(): void {
    this.test_for_pattern = true;
    this.question = this.shapesQuestions;
    this.i = 0;
  }

  changeLabelNameC1S1Q1(buttonselected) {
    if (buttonselected == "4") {
      this.labelstringC1S1Q1 = "Correct";
    } else {
      this.labelstringC1S1Q1 = "Incorrect";
    }
    return this.labelstringC1S1Q1;
  }

  changeLabelNameC1S1Q2(buttonselected) {
    if (buttonselected == "10") {
      this.labelstringC1S1Q2 = "Correct";
    } else {
      this.labelstringC1S1Q2 = "Incorrect";
    }
    return this.labelstringC1S1Q2;
  }

  changeLabelNameC1S7Q1(buttonselected) {
    if (buttonselected == "2") {
      this.labelstringC1S7Q1 = "Correct";
    } else {
      this.labelstringC1S7Q1 = "Incorrect";
    }
    return this.labelstringC1S7Q1;
  }

  changeLabelNameC1S7Q2(buttonselected) {
    if (buttonselected == "6") {
      this.labelstringC1S7Q2 = "Correct";
    } else {
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
