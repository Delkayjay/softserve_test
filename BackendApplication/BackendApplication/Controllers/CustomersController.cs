using BackendApplication.Contracts;
using BackendApplication.Models;
using BackendApplication.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace BackendApplication.Controllers
{
    [ApiController]
    [Route("api/customers")]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomersController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        /// <summary>
        /// Add new customer
        /// </summary>
        /// <param name="request"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        [HttpPost]
        [ProducesResponseType(typeof(Customer), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create([FromBody] AddCustomerRequest request, CancellationToken cancellationToken)
        {
            int customerAge = DateOfBirthToAge(request.DateOfBirth);

            string? validate = ValidateCustomer(request.FirstName, request.LastName, request.DateOfBirth);

            if (validate != null) return await Task.FromResult(StatusCode(StatusCodes.Status400BadRequest, validate));

            Customer customer = Customer.Create(
                Guid.NewGuid(),
                request.FirstName,
                request.LastName,
                $"{request.FirstName} {request.LastName}",
                request.Email,
                request.DateOfBirth,
                customerAge,
                DateTime.Now, 
                null, 
                false);

            _customerRepository.Add(customer);

            return await Task.FromResult(StatusCode(StatusCodes.Status201Created, customer));
        }

        [HttpGet]
        public async Task<IActionResult> Get(CancellationToken cancellationToken)
        {
            List<Customer> customers = _customerRepository.GetAll();

            return await Task.FromResult(Ok(customers));
        }

        [HttpGet("{customerId:guid}")]
        public async Task<IActionResult> Get(Guid customerId, CancellationToken cancellationToken)
        {
            Customer? customer = _customerRepository.FindById(customerId);
            if (customer == null) return await Task.FromResult(StatusCode(StatusCodes.Status404NotFound));

            return Ok(customer);
        }

        [HttpPut("{customerId:guid}")]
        public async Task<IActionResult> Update(
            Guid customerId, 
            [FromBody]UpdateCustomerRequest request, 
            CancellationToken cancellationToken)
        {
            Customer? customer = _customerRepository.FindById(customerId);
            if (customer == null) return await Task.FromResult(StatusCode(StatusCodes.Status404NotFound));

            string? validate = ValidateCustomer(request.FirstName, request.LastName, request.DateOfBirth);
            if (validate != null) return await Task.FromResult(StatusCode(StatusCodes.Status400BadRequest, validate));

            int customerAge = DateOfBirthToAge(request.DateOfBirth);

            customer.FirstName = request.FirstName;
            customer.LastName = request.LastName;
            customer.EmailAddress = request.EmailAddress;
            customer.UserName = $"{request.FirstName} {request.LastName}";
            customer.DateOfBirth = request.DateOfBirth;
            customer.DateEdited = DateTime.Now;
            customer.Age= customerAge;

            _customerRepository.Update(customer);


            return await Task.FromResult(StatusCode(StatusCodes.Status200OK, customer));
        }

        [HttpDelete("{customerId:guid}")]
        public async Task<IActionResult> Delete(Guid customerId)
        {
            Customer? customer = _customerRepository.FindById(customerId);
            if (customer == null) return await Task.FromResult(StatusCode(StatusCodes.Status404NotFound));

            _customerRepository.Delete(customer);

            return await Task.FromResult(StatusCode(StatusCodes.Status202Accepted));
        }

        public static int DateOfBirthToAge(DateTime dateOfBirth)
        {
            DateTime dt = DateTime.Today;

            int days = dt.Day - dateOfBirth.Day;
            if (days < 0)
            {
                dt = dt.AddMonths(-1);
            }

            int months = dt.Month - dateOfBirth.Month;
            if (months < 0)
            {
                dt = dt.AddYears(-1);
            }

            int years = dt.Year - dateOfBirth.Year;

            return years;
        }

        public static string? ValidateCustomer(string firstName, string lastName, DateTime dateOfBirth)
        {
            // first name validation
            if (String.IsNullOrEmpty(firstName)) return "Customer first name is required";

            // last name validation

            if (String.IsNullOrEmpty(lastName)) return "Customer last name is required";

            // date of birth validation

            if (DateTime.Now < dateOfBirth) return "Date of birth can't be larger than current date";

            return null;
        }
    }
}
