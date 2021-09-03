using System.Collections.Generic;

namespace Warehouse_management.Entities
{
    public class Warehouse
    {
        public int ItemId { get; set; }
        public int Amount { get; set; }
        public Item Item { get; set; }
        public List<Order> Orders { get; set; }
    }
}
