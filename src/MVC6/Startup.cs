using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;
using MVC6.Web.Models;
using Newtonsoft.Json.Serialization;

namespace MVC6.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .AddJsonOptions(
                    options =>
                    {
                        options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    });

            services.AddSingleton<ICompanyRepository, CompanyRepository>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    "default",
                    "{controller=Home}/{action=Index}/{id?}");
            });
        }

        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}