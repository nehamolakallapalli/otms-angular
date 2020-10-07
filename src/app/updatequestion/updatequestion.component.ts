import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { Questionservice } from '../service/questionservice';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent {
  //sevice: any;

  constructor(private questionService:Questionservice) { }

  question:Question;

  updateQuestion(form:any){
    let data=form.value;
   let questionTitle = data.questionTitle;
   let questionOptions = data.questionOptions;
   let questionAnswer = data.questionAnswer;
   let questionMarks = data.questionMarks;
   let chosenAnswer = data.chosenAnswer;
   let marksScored = data.marksScored;
   this.question=new Question(1, questionTitle, questionOptions,questionAnswer,questionMarks,chosenAnswer, marksScored,);
   this.questionService.addQuestion(this.question);
    /*let observable:Observable<Question>=this.sevice.updateQuestion(this.question);
    observable.subscribe(questionArg=>{this.question=questionArg;
    });*/
  }

}
