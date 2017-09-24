import { Component } from '@angular/core';
import { GoogleMapsConfig } from './modules/maps/maps.module';

@Component({
  selector: 'app-root',
  template: `
    <app-maps></app-maps>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title: string = 'App Component';

  constructor(private googleMapsConfig: GoogleMapsConfig) {
    this.googleMapsConfig.getApiKey('AIzaSyACW0e3e88U4JQwQ3ntCbJefqJzTxIzHGc');
  }
}
