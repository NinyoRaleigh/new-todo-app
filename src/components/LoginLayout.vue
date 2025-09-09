<script setup>
import LoginButtons from './LoginButtons.vue';
import LoginInput from './LoginInput.vue'
</script>

<template>
    <div class="wrapper flex items-center justify-center min-h-screen">
        <div
            class="w-[400px] rounded-lg bg-[rgba(255,255,255,0.9)] shadow-lg p-8 space-y-8 transform hover:-translate-y-1 duration-200">
            <!-- Title -->
            <div class="text-center font-bold text-3xl">
                <h1>Secure Login</h1>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-6">
                 <LoginInput label="Email Address" type="email" placeholder="Enter your Email" required />

            <!-- Password -->
            <LoginInput label="Password" type="password" placeholder="Enter your Password" required />

            <!-- Remember me -->
            <div class="flex justify-between">
                <div class="flex items-center space-x-2">
                    <input type="checkbox" id="remember" class="h-4 w-4" required />
                    <label for="remember" class="text-sm text-gray-500">Remember me</label>
                </div>
                <div class="flex items-center space-x-2 text-sm text-indigo-600">
                    <a href="">Forgot Password?</a>
                </div>
            </div>

            <!-- Submit -->
            <div>
                <LoginButtons type="submit">
                    <RouterLink to="/home">Sign In</RouterLink>
                </LoginButtons>
            </div>

            </form>
            <!-- Email -->
           

            <!-- Signup -->
            <div class="text-center text-sm">
                <p class="text-gray-500">
                    Don't have an account?
                    <span class="font-semibold text-indigo-600 hover:cursor-pointer">
                        <RouterLink to="/signup">Sign up here</RouterLink>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
