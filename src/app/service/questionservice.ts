import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Questionservice
{
    //getQuestionById(questionId: number): Observable<Question> {
    //throw new Error('Method not implemented.');
    //}
    questions:Question[]=[];

    
    baseUrl = "http://localhost:8586/questions";
    constructor(private http: HttpClient) {

    }  

    addQuestion (question:Question):Observable<Question>{
        let url=this.baseUrl+"/addquestion";
        let observable:Observable<Question>=this.http.post<Question>(url,question);
        return observable;
    }

    getquestionById(questionId:number):Observable<Question>{
        let url=this.baseUrl+"/getquestion/"+questionId;
        let observable:Observable<Question>=this.http.get<Question>(url);
        return observable;
    }
    
    deleteQuestionById(questionId: number): Observable<void> {
        let url = this.baseUrl + "/deletequestion/" + questionId;
        let observable: Observable<void> = this.http.delete<void>(url);
        return observable;
    }
    /*deleteQuestionById(questionId:number):void
    {
        console.log("before question removed,length="+this.questions.length); 
        for(let i=0 ;i<this.questions.length;i++ ){
           let question=this.questions[i];
            if(question.questionId===questionId){
                this.questions.splice(i,1);
            }
         }      
    }*/
    modifyQuestion(question:Question):Observable<Question>{
        let url=this.baseUrl+"/updatequestion";
        let observable:Observable<Question>=this.http.put<Question>(url,question);
        return observable;
    }
    allQuestions(): Observable<Question[]> {
        let url = "http://localhost:8586/allQuestions";
        let observable: Observable<Question[]> = this.http.get<Question[]>(url);
        return observable;
    }
}