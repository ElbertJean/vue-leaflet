<!-- <script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
</script> -->

<script>
  import MapView from './components/MapView/MapView.vue';
  import NavBar from './components/NavBar/NavBar.vue';

  export default {
    components: {
      MapView,
      NavBar
    }
  }
</script>

<template>
  <main>
    <NavBar />
    <MapView />
  </main>
</template>