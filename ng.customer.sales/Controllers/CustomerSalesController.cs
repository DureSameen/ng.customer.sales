using Microsoft.AspNet.OData;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ng.customer.sales.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ng.customer.sales.Controllers
{
     
    public class CustomerSalesController : ODataController
    {

        private readonly ApplicationContext _context;
        private readonly ILogger<CustomerSalesController> _logger;

        public CustomerSalesController(ILogger<CustomerSalesController> logger, ApplicationContext context)
        {
            _context = context;
            _logger = logger;
        }

        [EnableQuery]
        public IActionResult Get()
        {
            var sales = _context.CustSales.ToList();
                  
            if (sales != null)
                return Ok(sales);

            return NotFound();
        }
    }
}
