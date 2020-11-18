import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesListComponent } from './customerSales-list.component';

describe('CustomerSalesListComponent', () => {
  let component: CustomerSalesListComponent;
  let fixture: ComponentFixture<CustomerSalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
