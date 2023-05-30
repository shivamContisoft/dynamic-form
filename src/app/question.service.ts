import { Injectable } from '@angular/core';

import { DropdownQuestion } from './object-model/question-dropdown';
import { QuestionBase } from './object-model/question-base';
import { TextboxQuestion } from './object-model/question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     { key: 'solid', value: 'Solid' },
      //     { key: 'great', value: 'Great' },
      //     { key: 'good', value: 'Good' },
      //     { key: 'unproven', value: 'Unproven' }
      //   ],
      //   order: 1
      // }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  constructor() { }
}
