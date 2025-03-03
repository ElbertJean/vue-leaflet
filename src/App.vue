<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  components: {
    NavBar 
  }
}
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>
