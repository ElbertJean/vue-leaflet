<template>
  <l-map
    style="min-height: 84vh"
    :zoom="zoom"
    :center="center"
    @ready="onMapReady"
  >
    <l-geo-json :geojson="polygons" />
    <GlebesLayer />
    <l-control-scale position="bottomleft" :imperial="true" :metric="false" />
    <l-control-layers position="topright" ></l-control-layers>
    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"
    />
  </l-map>
</template>

<script>
import L from 'leaflet';
import 'leaflet-draw';
import { LMap, LTileLayer, LControlScale, LGeoJson, LControlLayers } from 'vue2-leaflet';
import GlebesLayer from './GlebesLayer.vue';

export default {
  components: {
    LMap,
    LTileLayer,
    GlebesLayer,
    LControlScale,
    LGeoJson,
    LControlLayers
  },
  data() {
    return {
      tileProviders: [
        {
          name: 'Satellite',
          visible: true,
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
        {
          name: 'Street',
          visible: false,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        }
      ],
      zoom: 14,
      center: [-23.129096216749616, -45.82651434998431],
      polygons: this.loadPolygons(),
      polygonDrawn: {
        type: 'FeatureCollection',
        features: []
      },
    };
  },
  methods: {
    onMapReady(map) {
      const drawControl = new L.Control.Draw({
        position: 'topright',
        draw: {
          polygon: true,
          polyline: false,
          rectangle: false,
          circle: false,
          circlemarker: false,
          marker: false,
          circleMarker: false,
        },
      });

      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (e) => {
        const layer = e.layer;
        const geojson = layer.toGeoJSON();

        this.polygons.features.push(geojson);
        this.savePolygonsToLocalStorage();
      });
      map.on(L.Draw.Event.EDITED, (e) => {
        const layers = e.layers;
        layers.eachLayer((layer) => {
          const geojson = layer.toGeoJSON();
          const index = this.polygons.features.findIndex((f) => f.id === geojson.id);
          if (index !== -1) {
            this.polygons.features[index] = geojson;
          }
        });
        this.savePolygonsToLocalStorage();
      })
    },
    savePolygonsToLocalStorage() {
      try {
        localStorage.setItem('polygons', JSON.stringify(this.polygons));
      } catch (error) {
        console.error('Error saving polygons to localStorage:', error);
      }
    },
    loadPolygons() {
      try {
        const storedPolygons = localStorage.getItem('polygons');
        return storedPolygons ? JSON.parse(storedPolygons) : this.polygonDrawn;
      } catch (error) {
        console.error('Error loading polygons from localStorage:', error);
        return this.polygonDrawn;
      }
    },
  },
};
</script>