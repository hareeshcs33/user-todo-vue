<template>
  <div id="app">
    <div class="app-page">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.cta-300 {
  min-width: 300px;
}
</style>
