using KnockoutJsPlayground.ViewModels;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutJsPlayground.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var HomeVm = new HomeViewModel();
            HomeVm.Firstname = "firstname";
            
            HomeVm.Lastname = "Lastname"
;            return View(HomeVm);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}