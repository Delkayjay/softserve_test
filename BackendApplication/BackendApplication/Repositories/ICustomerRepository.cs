using BackendApplication.Models;

namespace BackendApplication.Repositories
{
    public interface ICustomerRepository
    {
        void Add(Customer customer);
        void Update(Customer customer);
        void Delete(Customer customer);
        List<Customer> GetAll();
        Customer? FindById(Guid id);
    }
}
