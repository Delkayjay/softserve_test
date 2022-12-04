using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BackendApplication.Models
{
    public class Customer
    {
        public Customer(
            Guid customerId, 
            string firstName, 
            string lastName, 
            string userName, 
            string emailAddress, 
            DateTime dateOfBirth, 
            int age, 
            DateTime dateCreated, 
            DateTime? dateEdited, 
            bool isDeleted)
        {
            CustomerId = customerId;
            FirstName = firstName;
            LastName = lastName;
            UserName = userName;
            EmailAddress = emailAddress;
            DateOfBirth = dateOfBirth;
            Age = age;
            DateCreated = dateCreated;
            DateEdited = dateEdited;
            IsDeleted = isDeleted;
        }

        [JsonPropertyName("customerId")]
        public Guid CustomerId { get; set; }

        [JsonPropertyName("firstName")]
        public string FirstName { get; set; } = string.Empty;

        [JsonPropertyName("lastName")]
        public string LastName { get; set; } = string.Empty;

        [JsonPropertyName("userName")]
        public string UserName { get; set; } = string.Empty;

        [JsonPropertyName("emailAddress")]
        [EmailAddress]
        public string EmailAddress { get; set; } = string.Empty;

        [JsonPropertyName("dateOfBirth")]
        public DateTime DateOfBirth { get; set; }

        [JsonPropertyName("age")]
        public int Age { get; set; }

        [JsonPropertyName("dateCreated")]
        public DateTime DateCreated { get; set; }

        [JsonPropertyName("dateEdited")]
        public DateTime? DateEdited { get; set; }

        [JsonPropertyName("isDeleted")]
        public bool IsDeleted { get; set; }

        public static Customer Create(
            Guid customerId,
            string firstName,
            string lastName,
            string userName,
            string emailAddress,
            DateTime dateOfBirth,
            int age,
            DateTime dateCreated,
            DateTime? dateEdited,
            bool isDeleted
            )
        {
              return new Customer(
                  customerId, 
                  firstName, 
                  lastName, 
                  userName, 
                  emailAddress, 
                  dateOfBirth, 
                  age, 
                  dateCreated, 
                  dateEdited, 
                  isDeleted);
        }
    }
}
