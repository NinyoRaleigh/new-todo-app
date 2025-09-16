<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import { ref, onMounted, watch } from 'vue';

const todos = ref([]);
const editingId = ref(null);
const editingText = ref("");

// Load tasks
onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) todos.value = JSON.parse(saved);
});

// Mark complete
function completeTask(id) {
  const task = todos.value.find(t => t.id === id);
  if (task) task.isComplete = true;
}

// Delete (move to deleted)
function deleteTask(id) {
  const task = todos.value.find(t => t.id === id);
  if (task) task.isDeleted = true;
}

// Start editing
function startEdit(todo) {
  editingId.value = todo.id;
  editingText.value = todo.name;
}

// Save edit
function saveEdit(todo) {
  if (!editingText.value.trim()) return;
  todo.name = editingText.value;
  editingId.value = null;
  editingText.value = "";
}

// Cancel edit
function cancelEdit() {
  editingId.value = null;
  editingText.value = "";
}

// Save changes
watch(todos, (newTodos) => {
  localStorage.setItem("todos", JSON.stringify(newTodos));
}, { deep: true });
</script>

<template>
  <div>
    <NavBar />
    <aside><SideBar /></aside>

    <div class="absolute left-1/3 top-1/5 bottom-1/4 right-1/3 bg-white rounded-2xl shadow p-6 space-y-4">
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-semibold">Added Tasks</h1>
      </div>

      <div class="m-4 p-3 bg-gray-100 border rounded-lg h-[80%] overflow-y-auto space-y-2">
        <div v-if="todos.filter(t => !t.isComplete && !t.isDeleted).length === 0" 
             class="italic text-gray-500 text-center">
          No tasks yet. Add some!
        </div>

        <div v-else v-for="todo in todos.filter(t => !t.isComplete && !t.isDeleted)" 
             :key="todo.id"
             class="p-2 bg-white border rounded-lg flex items-center justify-between">
          
          <!-- Editing mode -->
          <template v-if="editingId === todo.id">
            <input v-model="editingText" class="border p-1 rounded mr-2 flex-1" />
            <button @click="saveEdit(todo)" class="px-2 py-1 bg-green-500 text-white text-sm rounded">Save</button>
            <button @click="cancelEdit" class="px-2 py-1 bg-gray-400 text-white text-sm rounded">Cancel</button>
          </template>

          <!-- Normal mode -->
          <template v-else>
            <span>{{ todo.name }}</span>
            <div class="flex gap-2">
              <!-- Edit button (before check) -->
              <button @click="startEdit(todo)" class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition">
                <img src="/images/edit.png" />
              </button>
              <!-- Complete -->
              <button @click="completeTask(todo.id)" class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition">
                <img src="/images/check-box.png" />
              </button>
              <!-- Delete -->
              <button @click="deleteTask(todo.id)" class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition">
                <img src="/images/delete.png" />
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
