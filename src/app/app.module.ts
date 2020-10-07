import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { HomeComponent } from './home/home.component';
import { Questionservice } from './service/questionservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetquestionByIdComponent } from './getquestion-by-id/getquestion-by-id.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { DeletequestionComponent } from './deletequestion/deletequestion.component';

@NgModule({
  declarations: [
    AppComponent,
    AddquestionComponent,
    GetquestionByIdComponent,
    QuestionlistComponent,
    HomeComponent,
    GetquestionByIdComponent,
    UpdatequestionComponent,
    DeletequestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Questionservice,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
