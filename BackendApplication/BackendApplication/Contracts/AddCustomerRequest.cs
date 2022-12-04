namespace BackendApplication.Contracts
{
    public record AddCustomerRequest(
        string FirstName,
        string LastName,
        string Email,
        DateTime DateOfBirth
        );
}
