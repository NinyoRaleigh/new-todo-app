<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import TaskCard from '../components/TaskCard.vue';
import { ref } from 'vue';

const todos = ref([
    
]);

const newTodo = ref("");

function addTodo() {
    todos.value.push({
        id: Math.random(),
        name: newTodo.value,
        isComplete : false,
    });
    newTodo.value = "";
}

function markAsComplete(id) {
    const todo = todos.value.find((todo) => todo.id === id);

    if (todo) {
        todo.isComplete = true;
    }
}

function undoTodo(id) {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
        todo.isComplete = false;
    }
}

</script>


<template>

    <div>
        <div>
            <NavBar></NavBar>
        </div>

        <aside>
            <SideBar></SideBar>
        </aside>

        <div class="absolute left-1/3 top-1/5 bottom-1/4 right-1/3 bg-white rounded-2xl space-y-4">
            <div class="text-center ">
                <h1 class="p-2 text-lg font-semibold">Added Tasks</h1>
            </div>
            <div>
                <div class="m-5">
            <ul>
                <li v-for="(todo, index) in todos" class="flex space-x-3 items-center">
                    <h1 :class="todo.isComplete ? 'line-through' : ''">
                        {{ todo.name }}
                    </h1>
                    <button 
                    v-if="todo.isComplete === false"
                    @click="markAsComplete(todo.id)" class="text-green-500">Complete</button>
                    <button 
                    v-else @click="undoTodo(todo.id)" class="text-green-500">Undo</button>
                </li>
            </ul>
        </div>
        <div class="ml-5">
            <input v-model="newTodo" type="text" class="border" />
            <button @click="addTodo">Add</button>
        </div>

            </div>
        </div>
    </div>


</template>