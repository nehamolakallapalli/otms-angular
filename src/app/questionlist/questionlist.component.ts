import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { Questionservice } from '../service/questionservice';
import { Observable } from 'rxjs';

@Component ({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent {
  questions:Question[];
  constructor(private questionservice:Questionservice) 
  {
    let observable: Observable<Question[]> = questionservice.allQuestions();
    observable.subscribe(
      questionArg => {
        this.questions = questionArg;
      },
      err => {
        console.log("inside QuestionListComponent err is " + err.message);
      }

    );
  }
  /*deleteQuestionById(questionId:number)
  {
    let observable=this.questionService.deleteQuestionById(questionId);
    observable.subscribe(result=>{this.deleteQuestionById(questionId)});
  }
  deleteQuestionById(questionId:number)
  {
    this.questionservice.deleteQuestionById(questionId);
  }*/
}
