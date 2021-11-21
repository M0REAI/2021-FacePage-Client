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
* {
  /* border: 1px solid red; */
}

html {
  height: 100%;
}

body {
    margin: 0;
    height: 100%;
  }

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
