<template>
<div>
    <div class="mb-3">
        <nav-header></nav-header>
    </div>
    <div class="container">
        <div class="mb-2">
            <todo-header></todo-header>
        </div>
        <div class="mb-2">
            <todo-list></todo-list>
        </div>
    </div>
</div>
</template>
<script>
import TodoList from '@/components/todo-list.vue';
import TodoHeader from '@/components/todo-header.vue';
import NavHeader from '@/components/nav-header.vue';

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
        NavHeader,
    }
}
</script>