import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from './object-model/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'dynamic-form-app';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }




  element_one: any;
  arr_one: any;



  ngOnInit(): void {

    this.arr_one = [
      {
        element: "input",
        type: "text",
        placeholder: "enter the name",
        required: "true",
        formControlName: "first_name",
        value: "Shivam",
        id: "first_name",
        maxlength: 10,
        minlength: 2,

      },
      {
        element: "input",
        type: "text",
        placeholder: "enter the name",
        required: "true",
        formControlName: "last_name",
        value: "Sharma",
        id: "last_name",
        maxlength: 10,
        minlength: 2,

      },
      {
        element: "label",
        for: "first_name",

        value: "First Name : ",
        id: "first_name",
        maxlength: 10,
        minlength: 2,

      },
      {
        element: "label",
        for: "last_name",

        value: "Last Name : ",
        id: "Last_name",
        maxlength: 10,
        minlength: 2,

      }, {
        element: "button",

        type: "submit",

        id: "select_Btn",
      }
      ,
      {
        element: "select",
        name: "selection",
        data_arr: [
          {
            element: "option",
            value: "1",
            innerText: "Value_1"
          },
          {
            element: "option",
            value: "2",
            innerText: "Value_2"
          }
        ],
        id: "select_Btn",


      }
    ]
    const app = document.getElementById('section_one');

    const e0 = this.arr_one[0];
    const e1 = this.arr_one[1];
    const e2 = this.arr_one[2];
    const e3 = this.arr_one[3];
    const e4 = this.arr_one[4];
    const e5 = this.arr_one[5];

    // 2. Create a new <p></p> element programmatically
    const _first_name_input = document.createElement(e0.element);
    const _first_name_label = document.createElement(e2.element);

    const _last_name_input = document.createElement(e1.element);
    const _last_name_label = document.createElement(e3.element);

    const _save_button = document.createElement(e4.element);

    const _select = document.createElement(e5.element);
    const _select_option_1 = document.createElement(e5.data_arr[0].element)
    const _select_option_2 = document.createElement(e5.data_arr[1].element)





    const br_tag = document.createElement("br");

    // 3. Add the text content

    _first_name_input.type = e0.type;
    _first_name_input.placeholder = e0.placeholder;
    _first_name_input.required = e0.required;
    _first_name_input.formControlName = e0.formControlName;
    _first_name_input.id = e0.id;
    _first_name_input.maxlength = e0.maxlength;
    _first_name_input.minlength = e0.minlength;


    _last_name_input.type = e1.type;
    _last_name_input.placeholder = e1.placeholder;
    _last_name_input.required = e1.required;
    _last_name_input.formControlName = e1.formControlName;
    _last_name_input.id = e1.id;
    _last_name_input.maxlength = e1.maxlength;
    _last_name_input.minlength = e1.minlength;



    _first_name_label.innerText = e2.value;
    _last_name_label.innerText = e3.value;

    // _save_button.type = e4.type;
    _save_button.innerText = "Submit"
    // _save_button.onclick = e4.onclick;
    // _save_button.addEventListener("click", this.submit_info());
    // _save_button.addEventListener('onclick',e4.onclick);
    
    _select_option_1.innerText = e5.data_arr[0].innerText;
    _select_option_1.value = e5.data_arr[0].value;

    _select_option_2.innerText = e5.data_arr[1].innerText;
    _select_option_2.value = e5.data_arr[1].value;




    app?.appendChild(_first_name_label);

    app?.appendChild(_first_name_input);
    app?.appendChild(br_tag);

    app?.appendChild(_last_name_label);
    
    app?.appendChild(_last_name_input);
    _last_name_input?.appendChild(br_tag);


    app?.appendChild(_select);
    app?.appendChild(br_tag);

    _select?.appendChild(_select_option_1)
    _select?.appendChild(_select_option_2)

    app?.appendChild(_save_button);



  }


  submit_info() {
    alert("Please enter your name");
  }


}
