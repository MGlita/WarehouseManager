using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Warehouse_management.Entities;

namespace Warehouse_management.Interfaces
{
    public interface IInternalDbContext : IDisposable
    {
        DbSet<Address> Address { get; set; }
        DbSet<CompanyPosition> CompanyPosition { get; set; }
        DbSet<Employee> Employee { get; set; }
        DbSet<Item> Item { get; set; }
        DbSet<Order> Order { get; set; }
        DbSet<OrderStatus> OrderStatus { get; set; }
        DbSet<Warehouse> Warehouse { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken));
        int SaveChanges();
    }
}
