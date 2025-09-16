<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import { ref, onMounted, watch } from 'vue';

const todos = ref([]);
const showRestorePopup = ref(false); // 🔔 popup state

// Load saved tasks
onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) todos.value = JSON.parse(saved);
});

// Restore task
function restoreTask(id) {
  const task = todos.value.find(t => t.id === id);
  if (task) {
    task.isDeleted = false;
    task.isComplete = false; // back to active list
    triggerPopup(); // show popup
  }
}

// Permanently delete task
function deleteForever(id) {
  todos.value = todos.value.filter(t => t.id !== id);
}

// Permanently clear all deleted tasks
function clearDeletedTasks() {
  todos.value = todos.value.filter(t => !t.isDeleted);
}

// Trigger popup
function triggerPopup() {
  showRestorePopup.value = true;
  setTimeout(() => {
    showRestorePopup.value = false;
  }, 2000); // auto-hide after 2s
}

// Save changes
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
        <h1 class="text-2xl font-semibold">Deleted Tasks</h1>
      </div>

      <div
        class="m-4 p-3 bg-gray-100 border rounded-lg h-[80%] overflow-y-auto space-y-2"
      >
        <div
          v-if="todos.filter(t => t.isDeleted).length === 0"
          class="italic text-gray-500 text-center"
        >
          No deleted tasks.
        </div>

        <div
          v-else
          v-for="todo in todos.filter(t => t.isDeleted)"
          :key="todo.id"
          class="p-2 bg-white border rounded-lg flex items-center justify-between"
        >
          <span>{{ todo.name }}</span>
          <div class="flex gap-2">
            <!-- Restore -->
            <button
              @click="restoreTask(todo.id)"
              class="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-700"
            >
              Restore
            </button>
            <!-- Delete Forever -->
            <button
              @click="deleteForever(todo.id)"
              class="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-700"
            >
              Delete Forever
            </button>
          </div>
        </div>
      </div>

      <!-- Clear All Deleted Tasks -->
      <div class="flex justify-center">
        <button
          @click="clearDeletedTasks"
          :disabled="todos.filter(t => t.isDeleted).length === 0"
          class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear All Deleted Tasks
        </button>
      </div>
    </div>

    <!-- 🔔 Popup Notification -->
    <transition name="fade">
      <div
        v-if="showRestorePopup"
        class="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        ✅ Task Restored!
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
