using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ng.customer.sales.Data
{
    public class CustomerSalesList
    {
        public IList<CustomerSales> Items { get; set; }
        public int Count { get; set; }
    }
}
