import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';

@Injectable()
export class GoogleMapsConfig {
  apiKey: string;
  constructor() {
    this.apiKey = '';
  }

  public getApiKey(key: any) {
    this.apiKey = key;
  }
}

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot()
  ],
  declarations: [MapsComponent],
  exports: [
    MapsComponent
  ],
  providers: [GoogleMapsConfig]
})

export class MapsModule { }

