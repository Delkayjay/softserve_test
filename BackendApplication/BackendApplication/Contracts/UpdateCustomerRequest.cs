namespace BackendApplication.Contracts
{
    public record UpdateCustomerRequest(
        string FirstName,
        string LastName,
        string EmailAddress,
        DateTime DateOfBirth
        );
}
