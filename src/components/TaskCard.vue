<script setup>
import SideButton from './SideButton.vue';
import { ref, watch, onMounted } from 'vue';

const todos = ref([]);
const newTodo = ref("");
const notification = ref("");

// Load tasks from localStorage when component mounts
onMounted(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
        todos.value = JSON.parse(saved);
    }
});

// Add new task
function addTodo() {
    if (!newTodo.value.trim()) return; // prevent empty tasks

    todos.value.push({
        id: Math.random(),
        name: newTodo.value,
        isComplete: false,
    });

    newTodo.value = "";

    notification.value = "Task added successfully!";
    setTimeout(() => {
        notification.value = "";
    }, 3000);
}

// Watch for changes and update localStorage
watch(
    todos,
    (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    { deep: true }
);
</script>

<template>
    
    <div class="absolute -top-[20%] left-[50%] -translate-x-1/2">
        <div v-if="notification" class="m-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            {{ notification }}
        </div>
        
    </div>

    <div class="justify-between flex p-10 border-b">
        <input v-model="newTodo" type="text" placeholder="Add a new task..."
            class="rounded-lg border-2 border-gray-300 bg-white p-3 w-2/3 focus:outline-none focus:border-indigo-600 focus:border-3 overflow-ellipsis" />
        <button @click="addTodo">
            <SideButton class="px-8 font-semibold text-lg">Add Task</SideButton>
        </button>
    </div>

    



    <!-- Empty state -->
    <div v-if="todos.length === 0" class="m-8 p-2 bg-gray-100 border-gray-400 border rounded-lg italic text-gray-500">
        <p>No tasks yet. Add one above!</p>
    </div>

    <!-- Task list -->
    <div v-else
        class="space-y-2 m-8 p-2 bg-gray-100 border-gray-400 border rounded-lg text-black h-[60%] overflow-y-auto">
        <div v-for="todo in todos" :key="todo.id"
            class="p-2 bg-white border rounded-lg flex items-center justify-between">
            <span>{{ todo.name }}</span>
        </div>
    </div>
</template>
