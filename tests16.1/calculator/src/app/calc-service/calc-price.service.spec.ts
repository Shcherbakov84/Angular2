import { TestBed, inject } from '@angular/core/testing';

import { CalcPriceService } from './calc-price.service';

describe('CalcServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcPriceService]
    });
  });

  it('should be created', inject([CalcPriceService], (service: CalcPriceService) => {
    expect(service).toBeTruthy();
  }));
});
