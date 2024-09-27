using Microsoft.EntityFrameworkCore;
using db_test_try.Entity.TableTest;

namespace db_test_try
{
    public class TryTestContext(DbContextOptions<TryTestContext> options) : DbContext(options)
    {
        public DbSet<ColumnsTest> ColumnsTest { get; set; }
    }
}
