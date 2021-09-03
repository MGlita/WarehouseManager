using System.Collections.Generic;
using Warehouse_management.Entities;

namespace Warehouse_management.Interfaces
{
    public interface IOrderRepository
    {
        List<Order> GetActiveOrders();
        void AddOrder(Order order);
        void AcceptOrder(int orderId);
        void CancelOrder(int orderId);
    }
}
