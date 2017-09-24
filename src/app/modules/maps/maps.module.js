"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var maps_component_1 = require("./maps.component");
var core_2 = require("@agm/core");
var GoogleMapsConfig = /** @class */ (function () {
    function GoogleMapsConfig() {
        this.apiKey = '';
    }
    GoogleMapsConfig.prototype.getApiKey = function (key) {
        this.apiKey = key;
    };
    GoogleMapsConfig = __decorate([
        core_1.Injectable()
    ], GoogleMapsConfig);
    return GoogleMapsConfig;
}());
exports.GoogleMapsConfig = GoogleMapsConfig;
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_2.AgmCoreModule.forRoot()
            ],
            declarations: [maps_component_1.MapsComponent],
            exports: [
                maps_component_1.MapsComponent
            ],
            providers: [GoogleMapsConfig]
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;
