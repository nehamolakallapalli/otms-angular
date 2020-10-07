import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import  {Question } from '../model/question' ;
import { Questionservice } from '../service/questionservice';

@Component({
  selector: 'app-getquestion-by-id',
  templateUrl: './getquestion-by-id.component.html',
  styleUrls: ['./getquestion-by-id.component.css']
})
export class GetquestionByIdComponent 
{

  question : Question;
  constructor(private questionService:Questionservice) { }

  questionId:number;
  name:String="aaaaaa";
  
     getQuestion(questionId:number){
      let observable:Observable<Question>=this.questionService.getquestionById(questionId);
      observable.subscribe(
        questionArg =>{
          this.question=questionArg;
        },
        err =>{
          console.log("error in getquestion by Id"+err.message);
        }
      );
     }
     
    getquestionById(form:any)
    {
      let data=form.value;
      let questionId=data.questionId;
      this.getquestionById(questionId);
      
    }
}
