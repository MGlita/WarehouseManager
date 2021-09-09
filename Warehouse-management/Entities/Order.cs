using System;
using System.Collections.Generic;

namespace Warehouse_management.Entities
{
    public class Order
    {
        public int OrderId { get; set; }
        public double Price { get; set; }
        public DateTime OrderDate { get; set; }
        public byte StatusId { get; set; }
        public string Contractor { get; set; }
        public List<OrderItem> OrderItem { get; set; }
        public OrderStatus Status { get; set; }
    }
}
