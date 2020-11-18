import { TestBed } from '@angular/core/testing';

import { CustomerSaleService } from './custumerSale.service';

describe('CustomerSaleService', () => {
  let service: CustomerSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
