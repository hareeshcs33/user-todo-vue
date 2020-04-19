<template>
    <div class="todo-table-block">
        <div class="cta-block">
            <button
            class="btn btn-success"
            @click="completedFilter"
          >selected
          </button>
          <button
            class="btn btn-danger mx-2"
            @click="uncompletedFilter"
          >
            uncompleted
          </button>
          <button
            class="btn btn-primary"
            @click="allDisplay"
          >All
          </button>
        </div>
        <div class="todo-table">
            <div class="w-100 add-row py-2">
                <div class="check-box add-row-content font-weight-bold">Name</div>
                <div class="date-box add-row-content font-weight-bold">Created Date</div>
                <div class="date-box add-row-content font-weight-bold">Due Date</div>
                <div class="date-box add-row-content font-weight-bold">Edit</div>
            </div>
            <todo
                v-for="(item, index) in filteredTodolist"
                :key="index"
                :item="item"
                @deleteRow="deleteRow"
                @updateEditTodoItem="updateEditTodoItem"
                ></todo>
            <hr/>
            <add-todo
                :todoItem="newTodoItem"
                @addTodoItem="addTodoItem"
                ></add-todo>
        </div>
    </div>
</template>
<script>
import Todo from '@/components/todo.vue';
import AddTodo from '@/components/add-todo.vue';
import EventBus from './event-bus.js';

export default {
    data(){
        return {
            newTodoItem: {
                    isCompleted: false,
                    isEditable: false,
                    todoName: "Name",
                    createdDate: "",
                    isDisabled: true,
                    dueDate: "",
                    dueDate: "",
                    id: Date.now(),
            },
            addTodolist: [],
            filterBy: '',
            filteredTodolist: []
        }
    },
    methods: {
        addTodoItem(obj){
            console.log(obj);
            let objCopy = Object.assign({}, obj);
            this.addTodolist.push(objCopy);
            this.resetNewItem();
            this.filterTodolist();
        },
        resetNewItem(){
            this.newTodoItem.id = Date.now();
            this.newTodoItem.todoName = '';
        },
        deleteRow(index){
            this.addTodolist.splice(index, 1);
        },
        updateEditTodoItem(item){
            console.log(this.addTodolist,item);
            // for(var i=0; i < this.addTodolist.length; i++){
            //     this.addTodolist[i];
            // }
            this.addTodolist.forEach((obj) => {
                if(obj.id === item.id){
                    Object.assign(obj, item);
                }
            });
        },
        allDisplay(){
            this.filterBy = 'all';
            this.filterTodolist();
        },
        uncompletedFilter(){
            this.filterBy = 'pending';
            this.filterTodolist();
        },
        completedFilter(){
            this.filterBy = 'completed';
            this.filterTodolist();
        },
        filterTodolist(){
            if(!this.filterBy || this.filterBy === 'all'){
                this.filteredTodolist =  this.addTodolist;
            } else {
                this.filteredTodolist =  this.addTodolist.filter((item) => {
                    if(this.filterBy === 'completed')
                        return item.isCompleted;
                    else if(this.filterBy === 'pending')
                        return !item.isCompleted;
                    else 
                        return item;
                });
            }
        }
    },
    components: {
        Todo,
        AddTodo,
    },
}
</script>
<style>
.todo-table {
    background-color: #f1f1f1;
    padding: 30px;
}
</style>