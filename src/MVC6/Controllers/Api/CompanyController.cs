using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using MVC6.Web.Models;

namespace MVC6.Web.Controllers
{
    [Route("api/[controller]")]
    public class CompanyController : Controller
    {
        [FromServices]
        public ICompanyRepository Companies { get; set; }

        [HttpGet]
        public IEnumerable<Company> GetAllCompanies()
        {
            return Companies.GetAllCompanies();
        } 
    }
}
