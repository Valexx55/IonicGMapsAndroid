import { Component } from '@angular/core';
import {GoogleMap, GoogleMaps} from '@ionic-native/google-maps'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: GoogleMap;
  constructor() { }

  async ngOnInit() {
    
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 40.4530541,
          lng: -3.6883445 //cordenadas de el bernabéu
        },
        zoom: 18,
        tilt: 30
      }
    });

  }


  
}
