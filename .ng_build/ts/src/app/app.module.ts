import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapsModule, GoogleMapsConfig } from './modules/maps/maps.module';
import { MapsComponent } from './modules/maps/maps.component';
import { LAZY_MAPS_API_CONFIG } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [{ provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
