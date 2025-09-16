<script setup>
import SideButton from './SideButton.vue';
import { ref, watch, onMounted, computed } from 'vue';

const todos = ref([]);
const newTodo = ref("");
const notification = ref("");

// Load tasks
onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) todos.value = JSON.parse(saved);
});

// Add new task
function addTodo() {
  if (!newTodo.value.trim()) return;

  todos.value.push({
    id: Math.random(),
    name: newTodo.value.trim(),
    isComplete: false,
    isDeleted: false
  });

  newTodo.value = "";
  notification.value = "Task added successfully!";
  setTimeout(() => (notification.value = ""), 3000);
}

// Save to localStorage on change
watch(todos, (newTodos) => {
  localStorage.setItem("todos", JSON.stringify(newTodos));
}, { deep: true });

// Computed
const completedCount = computed(() =>
  todos.value.filter(t => t.isComplete && !t.isDeleted).length
);
const remainingCount = computed(() =>
  todos.value.filter(t => !t.isComplete && !t.isDeleted).length
);
</script>

<template>
  <div class="absolute -top-[20%] left-[50%] -translate-x-1/2">
    <div class="text-white">
      <p v-if="todos.length > 0" class="text-sm">
        You have {{ todos.length }} task<span v-if="todos.length > 1">s</span> —
        {{ completedCount }} completed, {{ remainingCount }} remaining.
      </p>
      <p v-else class="mt-4">No todos yet. Add one!</p>
    </div>

    <div v-if="notification" class="m-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
      {{ notification }}
    </div>
  </div>

  <div class="justify-between flex p-10 border-b">
    <input 
      v-model="newTodo"
      @keyup.enter="addTodo"
      type="text"
      placeholder="Add a new task..."
      class="rounded-lg border-2 border-gray-300 bg-white p-3 w-2/3 focus:outline-none focus:border-indigo-600"
    />
    <button @click="addTodo">
      <SideButton class="px-8 font-semibold text-lg">Add Task</SideButton>
    </button>
  </div>

  <!-- Active tasks -->
  <div v-if="todos.filter(t => !t.isComplete && !t.isDeleted).length === 0" 
       class="m-8 p-2 bg-gray-100 border rounded-lg italic text-gray-500">
    <p>No tasks yet. Add one above!</p>
  </div>
  <div v-else 
       class="space-y-2 m-8 p-2 bg-gray-100 border rounded-lg text-black h-[60%] overflow-y-auto">
    <div v-for="todo in todos.filter(t => !t.isComplete && !t.isDeleted)" 
         :key="todo.id"
         class="p-2 bg-white border rounded-lg flex items-center justify-between">
      <span>{{ todo.name }}</span>
    </div>
  </div>
</template>
