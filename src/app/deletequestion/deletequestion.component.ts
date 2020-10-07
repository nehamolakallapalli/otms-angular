import { Component, OnInit } from '@angular/core';
import { Questionservice } from '../service/questionservice';

@Component({
  selector: 'app-deletequestion',
  templateUrl: './deletequestion.component.html',
  styleUrls: ['./deletequestion.component.css']
})
export class DeletequestionComponent {

  constructor(private questionService:Questionservice) { }

  deleteQuestion(questionId:number){
    console.log("the deleted question id is" +questionId);
    let observable=this.questionService.deleteQuestionById(questionId);
      observable.subscribe(
        questionArg=>{
          console.log("deleted question Id id"+questionId);
        },
        err =>{
          console.log("error in delete qustion by id"+err.message);
        }
      );
  }
  deleteQuestionById(form:any){
    let data=form.value;
    let questionId=data.questionId;
    this.deleteQuestionById(questionId);  
  }

  /*deleteQuestion(questionId:number)
  {
    this.questionService.deleteQuestion(questionId);
  }*/
}
