/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
namespace Home {
    export class HomeViewModel {
        public vm: KnockoutObservable<any>;
        constructor(data: any) {
            debugger;
            this.vm = ko.observable(null);
            this.vm = ko.mapping.fromJS(data, {}, this.vm());


        }
    }
}


