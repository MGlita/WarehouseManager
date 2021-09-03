using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Warehouse_management.Entities;
using Warehouse_management.Interfaces;

namespace Warehouse_management.Repositories
{
    public class WarehouseRepository : IWarehouseRepository
    {
        private readonly IInternalDbContext _context;

        public WarehouseRepository(IInternalDbContext context)
        {
            _context = context;
        }

        public List<Warehouse> GetWarehouse()
        {
            var result = _context.Warehouse.Include(x=>x.Item).Select(x => x).ToList();
            return result;
        }

        public void AddWarehouse(Warehouse warehouse)
        {
            _context.Warehouse.Add(warehouse);
            _context.SaveChanges();
        }

        public void UpdateWarehouse(Warehouse warehouse)
        {
            var existingWarehouseItem = _context.Warehouse.Single(x => x.ItemId == warehouse.ItemId);
            if (existingWarehouseItem.Amount < warehouse.Amount)
                throw new Exception("Amount too big");
            existingWarehouseItem.Amount -= warehouse.Amount;
            _context.Warehouse.Update(existingWarehouseItem);
            _context.SaveChanges();
        }
    }
}
