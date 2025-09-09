<script setup>
</script>

<template>
    <div>
        <div class="p-2 flex justify-between w-full bg-blue-500 items-center">
            <div class="flex space-x-2 font-extrabold text-white">
                <RouterLink to="/">Home Page</RouterLink>
                <RouterLink to="/about">About Page</RouterLink>
            </div>
            <div class="p-2 bg-white rounded-3xl text-blue-500 font-bold hover:bg-black hover:text-white ">
                <RouterLink to="/login">Login Page</RouterLink>

            </div>

        </div>
        <slot></slot>
    </div>
</template>