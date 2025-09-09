<script setup>
import LoginLayout from '../components/LoginLayout.vue';
import MainLayout from '../components/MainLayout.vue';
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import SideButton from '../components/SideButton.vue';
import SignUp from '../components/SignUp.vue';
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
            <TaskCard></TaskCard>

        </div>
    </div>


</template>