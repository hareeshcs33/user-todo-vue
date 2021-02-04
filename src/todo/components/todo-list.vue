<template>
  <div class="container todo-list m-5">
    <div class="form-wrapper">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter new todo value..."
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </div>
    </div>
    <todo-item
      class="p-2 mb-2"
      v-for="(user, index) in users"
      :usersData="users"
      :index="index"
      :key="user.id"
    ></todo-item>
  </div>
</template>
<script>
import TodoItem from "./todo-item";
import { users } from "../data/user-data";

export default {
  data() {
    return {
      users,
      newTodo: "",
      beforeEditCache: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.users.push({
        title: "simple todo item",
        id: this.users.id++,
        completed: false,
        editing: false
      });
    }
  },
  components: {
    TodoItem
  }
};
</script>
