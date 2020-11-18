import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerSalesListComponent } from './components/customerSales-list/customerSales-list.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'customerSales', pathMatch: 'full' },
  { path: 'customerSales', component: CustomerSalesListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
