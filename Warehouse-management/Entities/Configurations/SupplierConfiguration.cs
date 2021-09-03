using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Warehouse_management.Entities.Configurations
{
    public class SupplierConfiguration : IEntityTypeConfiguration<Supplier>
    {
        public void Configure(EntityTypeBuilder<Supplier> builder)
        {
            builder
                .Property(x => x.Id)
                .IsRequired();
            builder
                .Property(x => x.Name)
                .IsRequired();
            builder
                .Property(x => x.Email)
                .IsRequired();
            builder
                .Property(x => x.Phone)
                .IsRequired();
        }
    }
}
