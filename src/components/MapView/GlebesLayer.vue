<script>
import { LGeoJson } from 'vue2-leaflet';
import { areasSJC } from './data/areasSJC.js';

export default {
  components: {
    LGeoJson
  },
  data() {
    return {
      data: null,
      geoFilter: null,
      updateKey: 0 
    };
  },
  mounted() {
    this.data = areasSJC;
  },
  methods: {
    handleClick(e) {
      const clickedFeature = e.propagatedFrom.feature;
      const same = this.geoFilter && this.geoFilter.properties.id === clickedFeature.properties.id;

      this.geoFilter = same ? null : clickedFeature;
      this.updateKey++;
    },
    featureStyle(feature) {
      const isSelected = this.geoFilter && this.geoFilter.properties.id === feature.properties.id;
      return {
        weight: isSelected? 5 : 3,
        opacity: isSelected ? 1 : 0.7
      };
    }
  }
};
</script>

<template>
  <l-geo-json 
    :key="updateKey"
    :geojson="data" 
    :optionsStyle="featureStyle" 
    @click="handleClick"
  />
</template>