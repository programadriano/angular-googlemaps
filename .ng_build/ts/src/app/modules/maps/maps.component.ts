import { Component, OnInit } from '@angular/core';

@Component({
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
})
export class MapsComponent {
  lat: number = -23.586479;
  lng: number = -46.682078;
  constructor() { }
}
