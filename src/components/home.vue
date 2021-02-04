<template>
  <div class="home">
    <todo-list></todo-list>
  </div>
</template>
<script>
import TodoList from "../todo/components/todo-list";

export default {
  name: "home",
  components: {
    TodoList
  }
};
</script>
