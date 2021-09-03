using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Warehouse_management.Entities.Configurations
{
    public class OrderStatusConfiguration : IEntityTypeConfiguration<OrderStatus>
    {
        public void Configure(EntityTypeBuilder<OrderStatus> builder)
        {
            builder
                .Property(x => x.Id)
                .IsRequired();
            builder
                .Property(x => x.Status)
                .IsRequired();
        }
    }
}
