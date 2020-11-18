import { Component, OnInit } from '@angular/core';
import { CustomerSaleService } from '../../services/custumerSale.service';

@Component({
  selector: 'app-customerSales-list',
  templateUrl: './customerSales-list.component.html',
  styleUrls: ['./customerSales-list.component.css']
})
export class CustomerSalesListComponent implements OnInit {

  customerSales: any;
  currentCustomerSale = null;
  currentIndex = -1;
  title = '';
  loading = true;
  page = 1;
  count = 30;
  pageSize = 10;
  pageSizes = [10, 20, 30];

  constructor(private tutorialService: CustomerSaleService) { }

  ngOnInit(): void {
    this.retrieveCustomerSales();
  }

  getRequestParams(searchTitle, page, pageSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchTitle) {
      params[`$filter`] = searchTitle;
    }

    if (page) {
      params[`$skip`] = pageSize * (page - 1);
    }

    if (pageSize) {
      params[`$top`] = pageSize;
    }

    return params;
  }

  retrieveCustomerSales(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.loading = true;
    this.tutorialService.getAll(params)
      .subscribe(
        response => {
          const { value } = response; 
          this.customerSales = value;
          //this.count = value.length;
          this.loading = false;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveCustomerSales();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveCustomerSales();
  }

  setActiveCustomerSale(customerSale, index): void {
    this.currentCustomerSale = customerSale;
    this.currentIndex = index;
  }

  removeAllCustomerSales(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomerSales();
        },
        error => {
          console.log(error);
        });
  }
}
