using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Warehouse_management.Entities.Configurations
{
    public class OrderItemConfiguration : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            builder
                .Property(x => x.OrderId)
                .IsRequired();
            builder
                .Property(x => x.ItemId)
                .IsRequired();
            builder
                .Property(x => x.Amount)
                .IsRequired();
            builder
                .HasKey(x => new { x.OrderId, x.ItemId });
            builder
                .HasOne(x => x.Order)
                .WithMany(x => x.OrderItem)
                .HasForeignKey(x=>x.OrderId);
            
        }
    }
}
