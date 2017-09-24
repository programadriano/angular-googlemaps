import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core/index';
export class GoogleMapsConfig {
    constructor() {
        this.apiKey = '';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getApiKey(key) {
        this.apiKey = key;
    }
}
GoogleMapsConfig.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
GoogleMapsConfig.ctorParameters = () => [];
function GoogleMapsConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleMapsConfig.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    GoogleMapsConfig.ctorParameters;
    /** @type {?} */
    GoogleMapsConfig.prototype.apiKey;
}
export class MapsModule {
}
MapsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    AgmCoreModule.forRoot()
                ],
                declarations: [MapsComponent],
                exports: [
                    MapsComponent
                ],
                providers: [GoogleMapsConfig]
            },] },
];
/**
 * @nocollapse
 */
MapsModule.ctorParameters = () => [];
function MapsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    MapsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MapsModule.ctorParameters;
}
//# sourceMappingURL=maps.module.js.map