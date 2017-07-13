import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  userPhoneNmb: string;
  userSum: string;
  userEmail: string;
  userCardId: string;
  isAccountReplenished: boolean;
  selectedMonth;
  selectedYear;

  months = [
    {value: 'Dec', viewValue: 'December'},
    {value: 'Jan', viewValue: 'January'},
    {value: 'Feb', viewValue: 'February'},
    {value: 'Mar', viewValue: 'March'},
    {value: 'Apr', viewValue: 'April'},
    {value: 'May', viewValue: 'May'},
    {value: 'Jun', viewValue: 'June'},
    {value: 'Jul', viewValue: 'July'},
    {value: 'Aug', viewValue: 'August'},
    {value: 'Sep', viewValue: 'September'},
    {value: 'Oct', viewValue: 'October'},
    {value: 'Nov', viewValue: 'November'},
  ];

  years = [
    {value: 2017, viewValue: '2017'},
    {value: 2018, viewValue: '2018'},
    {value: 2019, viewValue: '2019'}
  ];

  constructor() { }

  ngOnInit() {
  }

  replenishAccount() {
    this.isAccountReplenished = true;
  }
}

// 380967771177
// petrpetrov@gmail.com
// 1111111111111111
//777
