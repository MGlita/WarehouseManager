using entity = Warehouse_management.Enums;

namespace Warehouse_management.Entities
{
    public class OrderStatus
    {
        public byte Id { get; set; }
        public entity.OrderStatus Status { get; set; }
    }
}
