<template>
    <div class="container">
        <div class="mb-2">
            <todo-header></todo-header>
        </div>
        <div class="mb-2">
            <todo-list></todo-list>
        </div>
    </div>
</template>
<script>
import TodoList from '@/components/todo-list.vue';
import TodoHeader from '@/components/todo-header.vue';

export default {
    data(){
        return {
        }
    },
    methods: {
    },
    components: {
        TodoHeader,
        TodoList,
    }
}
</script>