<script setup>
import LoginButtons from './LoginButtons.vue';
import SideButton from './SideButton.vue';

</script>

<template>
    <div>
        <aside class="h-5/6 absolute left-0 top-[10%] bg-gray-100 w-[15%] text-center space-y-10 border-r rounded-r-2xl border-gray-300 p-5">
            <div class="font-semibold text-lg mt-15">
                <h1>Task Categories</h1>
            </div>
            <div class="space-y-5 flex flex-col ">
                <RouterLink to="/home"><SideButton>Add New Task </SideButton></RouterLink>
                <RouterLink to="/home/added"><SideButton>New Added Task</SideButton></RouterLink> 
                <RouterLink to="/home/finished"><SideButton>Finished Task</SideButton></RouterLink>
                <RouterLink to="/home/deleted"><SideButton>Deleted Task</SideButton></RouterLink>
            </div>
            <div class="absolute bottom-[5%] right-[10%]">
                <SideButton>Unassigned</SideButton>
            </div>
        </aside>
    </div>
</template>