using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace Warehouse_management.Entities.Configurations
{
    public class CompanyPositionConfiguration : IEntityTypeConfiguration<CompanyPosition>
    {
        public void Configure(EntityTypeBuilder<CompanyPosition> builder)
        {
            builder
                .Property(x => x.Id)
                .HasColumnType("smallint");
            builder
                .Property(x => x.Position)
                .HasMaxLength(50)
                .IsRequired();
        }
    }
}
