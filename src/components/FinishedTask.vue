<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import { ref, onMounted, watch } from 'vue';

const todos = ref([]);

// Load saved tasks when this page opens
onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) {
    try {
      todos.value = JSON.parse(saved).filter(todo => todo.name?.trim()); // ✅ filter out empty tasks
    } catch (e) {
      todos.value = [];
    }
  }
});

// Delete task by id
function deleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

// Update localStorage whenever tasks change
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
    <div>
      <NavBar />
    </div>

    <aside>
      <SideBar />
    </aside>

    <div class="absolute left-1/3 top-1/5 bottom-1/4 right-1/3 bg-white rounded-2xl shadow p-6 space-y-4">
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-semibold">Finished Tasks</h1>
      </div>

      <!-- Task List -->
      <div class="m-4 p-3 bg-gray-100 border border-gray-300 rounded-lg h-[80%] overflow-y-auto space-y-2">
        <div v-if="todos.length === 0" class="italic text-gray-500 text-center">
          No tasks yet. Add some!
        </div>

        <div v-else v-for="todo in todos" :key="todo.id"
          class="p-2 bg-white border rounded-lg flex items-center justify-between">
          <span>{{ todo.name }}</span>
          <div>
            <button @click="deleteTodo(todo.id)" class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition">
              <img class="text-black" src="/images/edit.png">
            </button>
            <button @click="deleteTodo(todo.id)" class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition">
              <img class="text-black" src="/images/check-box.png">
            </button>
            <button @click="deleteTodo(todo.id)" class="w-6 h-6 p-1 rounded hover:bg-gray-400 transition">
              <img class="text-black" src="/images/delete.png">
            </button>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
