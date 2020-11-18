using Microsoft.EntityFrameworkCore;


namespace ng.customer.sales.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {
             
        }


        public DbSet<CustomerSales> CustSales { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          
        }

    }
  
 
}
