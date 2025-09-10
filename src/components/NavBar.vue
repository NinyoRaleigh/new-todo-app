<script setup>
import SideBar from './SideBar.vue';

</script>

<template>
    <div class="wrapper1 min-h-screen">
        <div class="w-full bg-gray-100 flex justify-center p-4 items-center relative">

            <div class="text-3xl font-semibold text-indigo-600">
                <h1>To-Do App</h1>
            </div>
            <div class="bg-red-400 p-2 rounded-lg px-5 text-white font-semibold text-lg absolute right-0 mr-2">
                <button><RouterLink to="/">Log Out</RouterLink> </button>
            </div>
        </div>

                 
    </div>


</template>
<style scoped>
.wrapper1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>