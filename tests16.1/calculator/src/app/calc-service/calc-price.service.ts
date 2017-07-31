import { Injectable } from '@angular/core';

@Injectable()
export class CalcPriceService {
  
  getRoomArea(height, width, length): number {
    return height * width * 2 + height * length * 2;
  }

  getQuantityOfTins(area, quantityOfLayers, userConsumption): number {
    return Math.ceil(area * quantityOfLayers * userConsumption / 5);
  }

  getTotalPrice( quantityOfTins, priceForOne): number {
    return quantityOfTins * priceForOne;
  }
}