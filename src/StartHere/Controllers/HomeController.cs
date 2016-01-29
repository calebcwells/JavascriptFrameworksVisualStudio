using Microsoft.AspNet.Mvc;

namespace StartHere.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}