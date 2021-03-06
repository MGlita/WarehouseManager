using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Warehouse_management.Entities;
using Warehouse_management.Interfaces;

namespace Warehouse_management.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IInternalDbContext _context;

        public OrderRepository(IInternalDbContext context)
        {
            _context = context;
        }

        public List<Order> GetActiveOrders()
        {
            return _context.Order
                .Include(x=>x.OrderItem)
                .Where(x => x.StatusId == (byte)Enums.OrderStatus.Awaiting)
                .ToList();
        }

        public void AddOrder(Order order)
        {
            order.StatusId = 1;
            _context.Order.Add(order);
            _context.SaveChanges();
        }

        public void AcceptOrder(int orderId)
        {
            var order = _context.Order.Include(x=>x.OrderItem).SingleOrDefault(x => x.OrderId == orderId);
            if (order == null)
                throw new Exception("Order not found");
            order.StatusId = 2;
            foreach (var warehouse in order.OrderItem)
            {
                var newTotalWarehouse = _context.Warehouse.Where(x => x.ItemId == warehouse.ItemId).SingleOrDefault();
                if (newTotalWarehouse == null)
                    throw new Exception("Warehouse not found");
                newTotalWarehouse.Amount += warehouse.Amount;
                _context.Warehouse.Update(newTotalWarehouse);
            }
            _context.Order.Update(order);
            _context.SaveChanges();
        }

        public void CancelOrder(int orderId)
        {
            var order = _context.Order.SingleOrDefault(x => x.OrderId == orderId);
            if (order == null)
                throw new Exception("Order not found");
            order.StatusId = 3;
            _context.Order.Update(order);
            _context.SaveChanges();
        }
    }
}
