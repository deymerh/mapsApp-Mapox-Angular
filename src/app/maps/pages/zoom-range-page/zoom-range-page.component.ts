import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 4);

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw Error('El elemento no fué encontrado!');
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListener(): void {
    this.map?.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map?.on('zoomend', () => {
      if (this.map!.getZoom() < 18) return;
      this.map?.zoomTo(18);
    });

    this.map?.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChange(value: string): void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}
