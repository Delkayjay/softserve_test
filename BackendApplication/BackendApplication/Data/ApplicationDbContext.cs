using BackendApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendApplication.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        public DbSet<Customer> Customers { get; set; } = null!;
    }
}
