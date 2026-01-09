using Microsoft.EntityFrameworkCore;
using API.Models.DTO;
using API.Models;
public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new SimpleNoteTakingContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<SimpleNoteTakingContext>>()))
        {
            if (context == null || context.Users == null)
            {
                throw new ArgumentNullException("Null SimpleNoteTakingContext");
            }

            // Look for any movies.
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }

            context.Users.AddRange(
                new User
                {
                    UserName = "admin",
                    Password = "1DD358241539FB310793CC50E2EE4CD0ABAC6DE85D3FD561ACB36B14BE498B40-81E65A843F7C613A4642374B627F0371", //admin@123
                    DateCreated = DateTime.UtcNow
                }
            ); 
            context.SaveChanges();
        }
    }
}