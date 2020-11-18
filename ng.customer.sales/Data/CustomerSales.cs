using System;
using System.ComponentModel.DataAnnotations;

namespace ng.customer.sales.Data
{
    public class CustomerSales
    {   [Key]
        public string RegistrantId { get; set; }
        public string SaleDate { get; set; }
        public string CompanyId { get; set; } 
        public int Qty { get; set; } 
        public double Price { get; set; }
        public string Currency { get; set; }
     
    }
}
