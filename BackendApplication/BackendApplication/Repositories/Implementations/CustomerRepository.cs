using BackendApplication.Data;
using BackendApplication.Models;

namespace BackendApplication.Repositories.Implementations
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ApplicationDbContext _context;

        public CustomerRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Add(Customer customer)
        {
            _context.Customers.Add(customer);
            _context.SaveChanges();
        }

        public void Delete(Customer customer)
        {
            _context.Customers.Remove(customer);
            _context.SaveChanges();
        }

        public Customer? FindById(Guid id)
        {
            return _context.Customers.FirstOrDefault(x => x.CustomerId== id);
        }

        public List<Customer> GetAll()
        {
            return _context.Customers.ToList();
        }

        public void Update(Customer customer)
        {
            _context.Customers.Update(customer);
            _context.SaveChanges();
        }
    }
}
