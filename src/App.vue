<template>
  <div id="app">
    <div class="app-page">
      <todo-layout></todo-layout>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TodoLayout from '@/components/todo-layout.vue';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    TodoLayout,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.cta-300 {
  min-width: 300px;
}
</style>
