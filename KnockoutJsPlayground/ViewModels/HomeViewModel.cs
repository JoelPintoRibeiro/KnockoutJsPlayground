using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockoutJsPlayground.ViewModels
{
    public class HomeViewModel
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public List<WeaponViewModel> Weapons{ get;set; }
        public HomeViewModel()
        {
            this.Weapons = new List<WeaponViewModel>();
        }
    }
}