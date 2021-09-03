using System.Collections.Generic;
using Warehouse_management.Entities;

namespace Warehouse_management.Interfaces
{
    public interface IWarehouseRepository
    {
        List<Warehouse> GetWarehouse();
        void AddWarehouse(Warehouse warehouse);
        void UpdateWarehouse(Warehouse warehouse);
    }
}
