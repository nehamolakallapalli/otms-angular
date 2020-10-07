import { Component} from '@angular/core';
import { Question } from '../model/question';
import { Questionservice } from '../service/questionservice';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent {

  constructor(private questionService: Questionservice) 
  {  }
  question:Question;

  addQuestion(form:any){
   let data=form.value;
   let questionTitle = data.questionTitle;
   let questionOptions = data.questionOptions;
   let questionAnswer = data.questionAnswer;
   let questionMarks = data.questionMarks;
   let chosenAnswer = data.chosenAnswer;
   let marksScored = data.marksScored;
   this.question=new Question(1, questionTitle, questionOptions,questionAnswer,questionMarks,chosenAnswer, marksScored,);
   this.questionService.addQuestion(this.question);
  }

}
