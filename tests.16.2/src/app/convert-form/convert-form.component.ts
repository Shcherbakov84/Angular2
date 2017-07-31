import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ConvertService } from '../convert-service/convert.service';

@Component({
  selector: 'convert-form',
  templateUrl: './convert-form.component.html',
  styleUrls: ['./convert-form.component.css']
})

export class ConvertFormComponent implements OnInit {
  inputUserValue: number;
  inputMoneyType: string;
  outputMoneyType: string;
  convertredValue: number;
  isConvertBtnClicked: boolean;

  moneyTypes = [
    {value: 'UAH'},
    {value: 'USD'},
    {value: 'EUR'}
  ];

  constructor( private convertService : ConvertService ) {}

  ngOnInit() {
    this.isConvertBtnClicked = false;
  }

  convert() {
    this.convertService.setFormValues( this.inputUserValue, this.inputMoneyType, this.outputMoneyType );
    this.convertredValue = this.convertService.getConvertedValue();
    this.isConvertBtnClicked = true;
  }
}
