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