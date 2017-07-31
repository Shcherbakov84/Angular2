import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { CalcPriceService } from '../calc-service/calc-price.service';

@Component({
  selector: 'calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})

export class CalcFormComponent {
  roomHeight: number;
  roomWidth: number;
  roomLength: number;
  userConsumption: number;
  priceForOne: number;
  quantityOfLayers: number;
  area: number;
  quantityOfTins: number = this.area * this.userConsumption / 5;
  totalPrice: number;
  isCalcBtnClicked: boolean;
  layers = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4}
  ];

  constructor( private calcPriceService : CalcPriceService ) {}

  calculate() {
    this.area = this.calcPriceService.getRoomArea(this.roomHeight, this.roomWidth, this.roomLength);
    this.quantityOfTins = this.calcPriceService.getQuantityOfTins(this.area, this.quantityOfLayers, this.userConsumption);
    this.totalPrice = this.calcPriceService.getTotalPrice(this.quantityOfTins, this.priceForOne);
    this.isCalcBtnClicked = true;
  }

  isConsumptionValueCorrect():boolean {
    return (  this.userConsumption >= 0.1 && this.userConsumption <= 0.5 ) ? true : false;
  }

}
