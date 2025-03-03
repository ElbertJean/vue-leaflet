<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
  components: {
    NavBar 
  }
}
</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>
