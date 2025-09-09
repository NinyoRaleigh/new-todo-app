<script setup>
import SideButton from './SideButton.vue';
import { ref } from 'vue';

const todos = ref([

]);

const newTodo = ref("");

function addTodo () {
    todos.value.push({
        id: Math.random(),
        name: newTodo.value,
        isComplete : false,
    });
    newTodo.value = "";
}


</script>

<template>
    <div class="justify-between flex p-10 border-b">
        <input v-model="newTodo" type="text" placeholder="Add a new task..."
            class=" rounded-lg border-2 border-gray-300 bg-white p-3 w-2/3 focus:outline-none focus:border-indigo-600 focus:border-3 overflow-ellipsis">
        <button @click="addTodo"><SideButton class="px-8 font-semibold text-lg">Add Task</SideButton></button>
    </div>

    <div v-if="todos.length === 0" 
    class="m-8 p-2 bg-gray-100 border-gray-400 border rounded-lg italic text-gray-500">
        <p class="">No tasks yet. Add one above!</p> remove this if new task are added 
    </div>
    <div v-else class="space-y-2 m-8 p-2 bg-gray-100 border-gray-400 border rounded-lg italic text-black   h-[60%] overflow-y-auto">
        <div v-for="todo in todos" :key="todo.id"  class="p-2 bg-white border rounded-lg flex items-center justify-between">
            <span>{{ todo.name }}</span>
        </div>

    </div>

</template>