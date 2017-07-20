import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DateService } from '.././shared/date.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  userForm: FormGroup;
  isAccountReplenished: boolean;
  selectedMonth;
  selectedYear;

  constructor( private fb: FormBuilder, private dateService: DateService ) { }

  formErrors = {
    "userPhoneNmb": "",
    "userSum": "",
    "userEmail": "",
    "userCardId": "",
    "userMonth": "",
    "userYear": "",
    "userCVV2": ""
  }
  validationMessages = {
    "userPhoneNmb": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат номера телефона."
    },
    "userSum": {
      "required": "Обязательное поле.",
      "min": "Сумма должна быть больше 5",
      "max": "Сумма должна быть меньше 5000"
    },
    "userEmail": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат email"
    },
    "userCardId": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат кода карточки"
    },
    "userMonth": {
      "required": "Обязательное поле."
    },
    "userYear": {
      "required": "Обязательное поле."
    },
    "userCVV2": {
      "required": "Обязательное поле.",
      "pattern": "Не правильный формат CVV2"
    }
  }

  ngOnInit() {
    this.buildForm();
    this.dateService.months;
    this.dateService.years;
  }

  isBtnDisabled() {
    return (this.userForm.status == 'INVALID') ? true : false;   
  }

  replenishAccount() {
    this.isAccountReplenished = true;
  }

  buildForm() {
    this.userForm = this.fb.group ({
      userPhoneNmb: ['', [
        Validators.required,
        Validators.pattern("380[0-9]{9}")
      ]],
      userSum: ['', [
        Validators.required,
        Validators.min(5),
        Validators.max(5000)
      ]],
      userEmail: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]],
      userCardId: ['', [
        Validators.required,
        Validators.pattern("[0-9]{16}")
      ]],
      userMonth: ['', [
        Validators.required
      ]],
      userYear: ['', [
        Validators.required
      ]],
      userCVV2: ['', [
        Validators.required,
        Validators.pattern("[0-9]{3}")
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
