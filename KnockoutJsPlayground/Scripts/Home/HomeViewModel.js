/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
var Home;
(function (Home) {
    var HomeViewModel = (function () {
        function HomeViewModel(data) {
            debugger;
            this.vm = ko.observable(null);
            this.vm = ko.mapping.fromJS(data, {}, this.vm());
        }
        return HomeViewModel;
    }());
    Home.HomeViewModel = HomeViewModel;
})(Home || (Home = {}));
//# sourceMappingURL=HomeViewModel.js.map