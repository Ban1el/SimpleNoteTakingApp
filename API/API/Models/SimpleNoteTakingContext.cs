using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class SimpleNoteTakingContext: DbContext
    {
        public SimpleNoteTakingContext(DbContextOptions<SimpleNoteTakingContext> options)
        : base(options)
        {
        }

        public DbSet<Page> Pages { get; set; } = null!;
        public DbSet<PageDatabase> PageDatabases { get; set; } = null!;
        public DbSet<PageDatabaseProperty> PageDatabaseProperties { get; set; } = null!;
        public DbSet<PageProperty> PageProperty { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;

    }
}
