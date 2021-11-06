<template>
  <navbar />
  <home />
  <about />
  <cars />
  <contact />
</template>

<script>
import navbar from './components/navbar.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import cars from './components/cars.vue'
import contact from './components/contact.vue'
export default {
  name: 'App',
  components: {
    navbar,
    home,
    about,
    cars,
    contact,
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
