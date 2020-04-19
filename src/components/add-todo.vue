<template>
    <div class="w-100 add-row">
        <div class="check-box add-row-content px-2">
            <input type="text" class="form-control" placeholder="add todo name" v-model="todoItem.todoName" />
        </div>
        <div class="date-box add-row-content px-2">
            <input type="date" class="form-control" id="createdDate" name="createdDate" value="2018-07-22" v-model="todoItem.createdDate">
        </div>
        <div class="date-box add-row-content px-2">
            <input type="date" class="form-control" id="dueDate" name="dueDate" value="2018-07-22" v-model="todoItem.dueDate">
        </div>
        <div class="add-cta-box add-row-content">
            <button class="btn btn-primary w-100" @click="addTodo">Add Todo</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        todoItem: {
            type: Object,
        }
    },
    data(){
        return {
        }
    },
    methods: {
        addTodo() {
            this.$emit('addTodoItem', this.todoItem);
        }
    },
    components: {
    }
}
</script>
<style>
.add-row {
    display: flex;
    align-content: space-between;
}
.add-row-content {
    width: 25%;
    text-align: center;
}
</style>