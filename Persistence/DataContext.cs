using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // DbSet<Model> TableName (Usually plural of model name)
        public DbSet<Activity> Activities { get; set; }
    }
}