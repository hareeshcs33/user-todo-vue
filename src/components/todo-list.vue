<template>
    <div class="row m-0">
        <todo></todo>
    </div>
</template>
<script>
import Todo from '@/components/todo.vue';
import EventBus from './event-bus.js';

export default {
    data(){
        return {
        }
    },
    components: {
        Todo,
    },
}
</script>