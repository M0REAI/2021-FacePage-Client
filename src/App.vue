<template>
  <main>
    <nav-bar/>
    <router-view/>
  </main>
</template>

<script>
import NavBar from './components/common/Nav.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
</style>
