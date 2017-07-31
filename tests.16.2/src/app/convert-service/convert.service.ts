import { Injectable } from '@angular/core';

@Injectable()
export class ConvertService {
  inputUserValue: number;
  inputMoneyType: string;
  outputMoneyType: string;

  coeffs =  {
    UAH_USD: 0.04, 
    UAH_EUR: 0.03, 

    USD_UAH: 25.7, 
    USD_EUR: 0.85, 

    EUR_UAH: 30, 
    EUR_USD: 1.15
  };

  setFormValues(...formValues) {
    this.inputUserValue = formValues[0];
    this.inputMoneyType = formValues[1];
    this.outputMoneyType = formValues[2];
  }

  getConvertedValue():number {
    return this.inputUserValue * this.getSelectedCoeff();
  }

  private getSelectedCoeff():number {
    if (this.inputMoneyType == this.outputMoneyType) {
      return 1;
    } else {
      if (this.inputMoneyType == 'UAH') {
        return (this.outputMoneyType == 'USD') ? this.coeffs.UAH_USD : this.coeffs.UAH_EUR;
      } else if (this.inputMoneyType == 'USD') {
        return (this.outputMoneyType == 'UAH') ? this.coeffs.USD_UAH : this.coeffs.USD_EUR;
      } else {
        return (this.outputMoneyType == 'UAH') ? this.coeffs.EUR_UAH : this.coeffs.EUR_USD;
      }
    }
  }
}