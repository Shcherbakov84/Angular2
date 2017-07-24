import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';


@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  isDataSent: boolean;

  constructor( private fb: FormBuilder) { }

  formErrors = {
    "userName": "",
    "userSurname": "",
    "userPhoneNmb": "",
    "userAdress": "",
    "userEmail": "",
  }
  validationMessages = {
    "userName": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат имени."
    },

    "userSurname": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат фамилии."
    },

    "userPhoneNmb": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат номера телефона."
    },

    "userAdress": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат адресса."
    },

    "userEmail": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат email"
    }
  }

  ngOnInit() {
    this.buildForm();
  }

  isBtnDisabled() {
    return (this.userForm.status == 'INVALID') ? true : false;   
  }

  send() {
    this.isDataSent = true;
  }

  buildForm() {
    this.userForm = this.fb.group ({
      userName: ['', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]{2,25}")
      ]],

      userSurname: ['', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]{2,25}")
      ]],

      userPhoneNmb: ['', [
        Validators.required,
        Validators.pattern("38[0-9]{3}[0-9]{7}")
      ]],

      userAdress: ['', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]{2,200}")
      ]],

      userEmail: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChange());
  }

  onValueChange() {
    if (!this.userForm) return;

    for (let item in this.formErrors) {
      this.formErrors[item] = "";
      let control = this.userForm.get(item);

      if (control && control.dirty && !control.valid) {
          let message = this.validationMessages[item];
          for (let key in control.errors) {
              this.formErrors[item] += message[key] + " ";
          }
      }
    }
  }
}


