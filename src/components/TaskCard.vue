<script setup>
import SideButton from './SideButton.vue';

</script>

<template>
    <div class="justify-between flex p-10 border-b">
        <input type="text" placeholder="Add a new task..."
            class=" rounded-lg border-2 border-gray-300 bg-white p-3 w-2/3 focus:outline-none focus:border-indigo-600 focus:border-3 overflow-ellipsis">
        <SideButton class="px-8 font-semibold text-lg">Add Task</SideButton>
    </div>

    <div class="m-5 p-2 bg-gray-100 border-gray-400 border rounded-lg italic text-gray-500">
        <p class="">No tasks yet. Add one above!</p>
    </div>

</template>