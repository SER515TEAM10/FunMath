import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-first-grade',
  templateUrl: './student-first-grade.component.html',
  styleUrls: ['./student-first-grade.component.scss']
})
export class StudentFirstGradeComponent implements OnInit {

  displayCounting:boolean
  displayPatterns:boolean
  buttonselected:string
  labelstringC1S1Q1:string
  labelstringC1S1Q2:string
  labelstringC1S7Q1:string
  labelstringC1S7Q2:string
  constructor() {
    this.displayCounting=false;
    this.displayPatterns=false;
    this.labelstringC1S1Q1="";
    this.labelstringC1S1Q2="";
    this.labelstringC1S7Q1="";
    this.labelstringC1S7Q2="";
   }

  ngOnInit() {
  }
  countingProblems():void{
    this.displayCounting=!this.displayCounting;
    this.displayPatterns=false;
    
  }
  patternProblems():void{
    this.displayPatterns=!this.displayPatterns;
    this.displayCounting=false; 
  }
  
  
  changeLabelNameC1S1Q1(buttonselected){
    if (buttonselected=='4'){
     this.labelstringC1S1Q1="Correct";
    }
    else{
      this.labelstringC1S1Q1="Incorrect";
    }
    return this.labelstringC1S1Q1;
  }

  changeLabelNameC1S1Q2(buttonselected){
    if (buttonselected=='10'){
     this.labelstringC1S1Q2="Correct";
    }
    else{
      this.labelstringC1S1Q2="Incorrect";
    }
    return this.labelstringC1S1Q2;
  }
  
  changeLabelNameC1S7Q1(buttonselected){
    if (buttonselected=='2'){
     this.labelstringC1S7Q1="Correct";
    }
    else{
      this.labelstringC1S7Q1="Incorrect";
    }
    return this.labelstringC1S7Q1;
  }

  changeLabelNameC1S7Q2(buttonselected){
    if (buttonselected=='6'){
     this.labelstringC1S7Q2="Correct";
    }
    else{
      this.labelstringC1S7Q2="Incorrect";
    }
    return this.labelstringC1S7Q2;
  }

}
