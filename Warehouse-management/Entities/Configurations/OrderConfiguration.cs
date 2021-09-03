using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Warehouse_management.Entities.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder
                .Property(x => x.OrderId)
                .IsRequired();
            builder
                .Property(x => x.Price)
                .IsRequired();
            builder
                .Property(x => x.OrderDate)
                .IsRequired();
            builder
                .Property(x => x.StatusId)
                .IsRequired();
            builder
                .Property(x => x.Contractor)
                .IsRequired();
            builder
                .HasMany(x => x.OrderItem)
                .WithOne(x => x.Order);
        }
    }
}
