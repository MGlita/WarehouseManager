using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Warehouse_management.Entities.Configurations
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder
                .Property(b => b.Id)
                .IsRequired();
            builder
                .Property(b => b.City)
                .HasMaxLength(50)
                .IsRequired();
            builder
                .Property(b => b.Street)
                .HasMaxLength(50)
                .IsRequired();
            builder
                .Property(b => b.StreetNo)
                .HasMaxLength(20)
                .IsRequired();
            builder
                .Property(b => b.FlatNo)
                .HasMaxLength(20);
            builder
                .Property(b => b.PostalCode)
                .HasMaxLength(6)
                .IsRequired();
        }
    }
}
