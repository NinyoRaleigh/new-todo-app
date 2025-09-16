<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import { ref, onMounted, watch } from 'vue';

const todos = ref([]);

onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) todos.value = JSON.parse(saved);
});

// Delete single task
function deleteTask(id) {
  const task = todos.value.find(t => t.id === id);
  if (task) task.isDeleted = true;
}

// Clear all finished tasks
function clearFinishedTasks() {
  todos.value.forEach(task => {
    if (task.isComplete && !task.isDeleted) {
      task.isDeleted = true;
    }
  });
}

// Save
watch(
  todos,
  (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  },
  { deep: true }
);
</script>

<template>
  <div>
    <NavBar />
    <aside><SideBar /></aside>

    <div
      class="absolute left-1/3 top-1/5 bottom-1/4 right-1/3 bg-white rounded-2xl shadow p-6 space-y-4"
    >
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-semibold">Finished Tasks</h1>
      </div>

      <div
        class="m-4 p-3 bg-gray-100 border rounded-lg h-[70%] overflow-y-auto space-y-2"
      >
        <div
          v-if="todos.filter(t => t.isComplete && !t.isDeleted).length === 0"
          class="italic text-gray-500 text-center"
        >
          No finished tasks yet.
        </div>

        <div
          v-else
          v-for="todo in todos.filter(t => t.isComplete && !t.isDeleted)"
          :key="todo.id"
          class="p-2 bg-white border rounded-lg flex items-center justify-between"
        >
          <span>{{ todo.name }}</span>
          <button
            @click="deleteTask(todo.id)"
            class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition"
          >
            <img src="/images/delete.png" />
          </button>
        </div>
      </div>

      <!-- Clear All Finished Tasks -->
      <div class="flex justify-center">
        <button
          @click="clearFinishedTasks"
          :disabled="todos.filter(t => t.isComplete && !t.isDeleted).length === 0"
          class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear All Finished Tasks
        </button>
      </div>
    </div>
  </div>
</template>
