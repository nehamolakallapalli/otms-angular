import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { HomeComponent } from './home/home.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { GetquestionByIdComponent } from './getquestion-by-id/getquestion-by-id.component';
import { DeletequestionComponent } from './deletequestion/deletequestion.component';


const routes: Routes = [
  {
    path: "app-home",
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full'
  },
  {
    path:'addquestion',
    component:AddquestionComponent
  },
  {
    path: 'getquestionbyId',
    component: GetquestionByIdComponent
  },
  {
    path:'updatequestion',
    component:UpdatequestionComponent
  },
  {
    path:'deletequestion',
    component:DeletequestionComponent
  },
  {
    path: 'allQuestions',
    component: QuestionlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
