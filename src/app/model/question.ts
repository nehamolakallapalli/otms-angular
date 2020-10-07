export class Question{
    questionId:number;
    questionTitle:string;
    questionOptions:string;
    questionAnswer:number;
    questionMarks:number;
    chosenAnswer:number;
    marksScored:number;
  
    constructor(questionId:number, questionTitle:string, questionOptions:string,questionAnswer:number,
     questionMarks:number,chosenAnswer:number,marksScored:number)
     {
        this.questionId=questionId;
        this.questionTitle = questionTitle;
        this.questionOptions=questionOptions;
        this.questionAnswer=questionAnswer;
        this.questionMarks=questionMarks;
        this.chosenAnswer=chosenAnswer;
        this.marksScored=marksScored;
      }
      getQuestionTitle():string{
        return this.questionTitle;
      }
      getquestionOptions():string{
        return this.questionOptions;
      }
      getquestionAnswer():number{
        return this.questionAnswer;
      }
      getquestionMarks():number{
        return this.questionMarks;
      }
      getchosenAnswer():number{
        return this.chosenAnswer;
      }
      getMarksScored():number{
        return this.marksScored;
      }
} 