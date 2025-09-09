<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import TaskCard from '../components/TaskCard.vue';


</script>


<template>

    <div>
        <div>
            <NavBar></NavBar>
        </div>

        <aside>
            <SideBar></SideBar>
        </aside>

        <div class="absolute left-1/3 top-1/5 bottom-1/4 right-1/3 bg-white rounded-2xl ">
            <div class="text-center ">
                <h1>Finished Tasks</h1>
            </div>
            

        </div>
    </div>


</template>