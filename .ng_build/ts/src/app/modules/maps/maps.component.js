import { Component } from '@angular/core';
export class MapsComponent {
    constructor() {
        this.lat = -23.586479;
        this.lng = -46.682078;
    }
}
MapsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-maps',
                template: `
    <agm-map [latitude]="lat" [longitude]="lng">
      <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
    </agm-map>
  `,
                styles: [`
    agm-map {
        height: 300px;
      }
  `]
            },] },
];
/**
 * @nocollapse
 */
MapsComponent.ctorParameters = () => [];
function MapsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MapsComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MapsComponent.ctorParameters;
    /** @type {?} */
    MapsComponent.prototype.lat;
    /** @type {?} */
    MapsComponent.prototype.lng;
}
//# sourceMappingURL=maps.component.js.map