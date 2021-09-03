using System;

namespace Warehouse_management.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public char Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public int CompanyPositionId { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int  AddressId { get; set; }
        public CompanyPosition CompanyPosition { get; set; }
        public Address Address { get; set; }
    }
}
