import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adult-test-form',
  templateUrl: './adult-test-form.component.html',
  styleUrls: ['./adult-test-form.component.css']
})
export class AdultTestFormComponent implements OnInit {
  formVisibility: boolean;
  userAge: number;
  selectedGenre;
  selectedVhs;
  isBtnClicked: boolean;

  genres = [
    {value: 'мультфильм', viewValue: 'мультфильм'},
    {value: 'комедия', viewValue: 'комедия'},
    {value: 'ужасы', viewValue: 'ужасы'}
  ];

  vhses = [
    {value: 'Видеокасета', viewValue: 'Видеокасета'},
    {value: 'Фреймворк', viewValue: 'Фреймворк'}
  ]

  constructor() { }

  ngOnInit() {
    this.formVisibility = true;
  }

  isHorror():boolean {
    return (this.selectedGenre == 'ужасы') ? true : false;
  }

  isAdult():boolean {
    return (this.userAge >= 18) ? true : false;
  }

  isVideocasette():boolean {
    return (this.selectedVhs == 'Видеокасета') ? true : false;
  }

  toggleFormVisibility() {
    this.formVisibility = !this.formVisibility;
  }

  confirm() {
    this.isBtnClicked = true;
    this.toggleFormVisibility();
  }
}

