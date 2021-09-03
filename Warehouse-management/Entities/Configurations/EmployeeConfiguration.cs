using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Warehouse_management.Entities.Configurations
{
    public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder
                 .Property(x => x.Id)
                 .IsRequired();
            builder
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(x => x.Surname)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(x => x.Gender)
                .IsRequired();
            builder
                .Property(x => x.BirthDate)
                .IsRequired();
            builder
                .Property(x => x.CompanyPositionId);
            builder
                .Property(x => x.Phone)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .Property(x => x.Email)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}
