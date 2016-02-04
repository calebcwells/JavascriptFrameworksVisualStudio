using Microsoft.AspNet.Mvc;

namespace Angular2.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}