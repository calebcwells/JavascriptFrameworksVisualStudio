using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MVC6.Web.Models;

namespace MVC6.Web.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index()
        {
            var companies = new List<Company>();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:5730/api/");
                client.DefaultRequestHeaders.Accept.Clear();

                var response = await client.GetAsync("company");
                if (response.IsSuccessStatusCode)
                {
                    companies = await response.Content.ReadAsAsync<List<Company>>();
                }
            }

            return View(companies);
        }
    }
}