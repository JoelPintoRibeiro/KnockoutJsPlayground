/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
namespace Home {
    export class WeapingViewModel {
        public Id: KnockoutObservable<number>;
        public Name: KnockoutObservable<string>;
        public FullName: KnockoutObservable<string>;
        constructor(data) {
            ko.mapping.fromJS(data, {}, this);
            debugger;
            this.FullName = ko.computed(function () {

                return this.Id() + " " + this.Name();
            }, this);
        }
    }
    export class HomeViewModelKo {
        public Firstname: KnockoutObservable<string>;
        public Lastname: KnockoutObservable<string>;
        public FullName: KnockoutObservable<string>;
        public Weapons: KnockoutObservableArray<WeapingViewModel>;
        constructor() {
            let that = this;
            this.Firstname = ko.observable("");
            this.Lastname = ko.observable("");
            this.FullName = ko.computed(function () {
              
                return that.Firstname() + " " + that.Lastname();
            }, this);
        }

        
    }

    export class HomeViewModel {
        public vm: KnockoutObservable<HomeViewModelKo>;
        constructor(data: any) {
          
            this.vm = ko.observable(new HomeViewModelKo());
            debugger;
            var mapping = {
                'Weapons': {
                    create: function (options) {
                        return new WeapingViewModel(options.data);
                    }
                }
            }

            this.vm = ko.mapping.fromJS(data, mapping, this.vm());
            debugger;

        }
    }
}


