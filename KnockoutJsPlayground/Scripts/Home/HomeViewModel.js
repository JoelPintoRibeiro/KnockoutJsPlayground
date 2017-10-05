/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
var Home;
(function (Home) {
    var WeapingViewModel = (function () {
        function WeapingViewModel(data) {
            ko.mapping.fromJS(data, {}, this);
            debugger;
            this.FullName = ko.computed(function () {
                return this.Id() + " " + this.Name();
            }, this);
        }
        return WeapingViewModel;
    }());
    Home.WeapingViewModel = WeapingViewModel;
    var HomeViewModelKo = (function () {
        function HomeViewModelKo() {
            var that = this;
            this.Firstname = ko.observable("");
            this.Lastname = ko.observable("");
            this.FullName = ko.computed(function () {
                return that.Firstname() + " " + that.Lastname();
            }, this);
        }
        return HomeViewModelKo;
    }());
    Home.HomeViewModelKo = HomeViewModelKo;
    var HomeViewModel = (function () {
        function HomeViewModel(data) {
            this.vm = ko.observable(new HomeViewModelKo());
            debugger;
            var mapping = {
                'Weapons': {
                    create: function (options) {
                        return new WeapingViewModel(options.data);
                    }
                }
            };
            this.vm = ko.mapping.fromJS(data, mapping, this.vm());
            debugger;
        }
        return HomeViewModel;
    }());
    Home.HomeViewModel = HomeViewModel;
})(Home || (Home = {}));
//# sourceMappingURL=HomeViewModel.js.map