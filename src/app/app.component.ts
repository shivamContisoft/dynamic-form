import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from './object-model/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'dynamic-form-app';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
  
}
