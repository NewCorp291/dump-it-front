import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  map: L.Map | L.LayerGroup<any> | undefined;

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap(){
    const toulouse = {
      lat: 43.604,
      lng: 1.44305
    };

    const zoomLevel = 12;
    this.map = L.map('map', {
      center: [toulouse.lat, toulouse.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    this.addMarker(toulouse)
  }

  addMarker(coords: { lat: number; lng: number; }) {
    const marker = L.marker([coords.lat, coords.lng], {icon: this.smallIcon});
    // @ts-ignore
    marker.addTo(this.map);
  }
}
