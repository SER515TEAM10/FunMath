import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Assignment {
  assignmentId: number;
  assignmentNumber: string;
  dueDate: Date;
  creationDate: Timestamp<string>;
  points: number;
  questionList:string;
  submittedAnswer:any[];  
}