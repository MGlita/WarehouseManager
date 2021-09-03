using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Warehouse_management.Entities.Configurations
{
    public class WarehouseConfiguration : IEntityTypeConfiguration<Warehouse>
    {
        public void Configure(EntityTypeBuilder<Warehouse> builder)
        {
            builder
                .Property(x => x.ItemId)
                .IsRequired();
            builder
                .Property(x => x.Amount)
                .IsRequired();
            builder
                .HasKey(x => x.ItemId);
            builder
                .HasOne(x => x.Item)
                .WithOne()
                .HasForeignKey<Warehouse>(x => x.ItemId);
                
        }
    }
}
