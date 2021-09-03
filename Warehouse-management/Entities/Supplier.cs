namespace Warehouse_management.Entities
{
    public class Supplier
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AddressId { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Address Address { get; set; }
    }
}
