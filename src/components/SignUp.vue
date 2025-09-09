<script setup>
import LoginButtons from './LoginButtons.vue';

</script>

<template>
    <div class="wrapper flex items-center justify-center min-h-screen">
        <div
            class="w-[400px] rounded-lg bg-[rgba(255,255,255,0.9)] shadow-lg p-8 space-y-8 transform hover:-translate-y-1 duration-200">
            <!-- Title -->
            <div class="text-center font-bold text-3xl">
                <h1>Create Your Account </h1>
            </div>

            <!-- fname -->
            <div class="space-y-2">
                <p class="text-sm font-medium">First Name</p>
                <input type="text" required placeholder="Enter your First Name" class="border rounded-lg border-gray-300 bg-white p-3 w-full
                 focus:outline-none focus:border-indigo-600 focus:border-3" />
            </div>

            <!-- lname -->
            <div class="space-y-2">
                <p class="text-sm font-medium">Last Name</p>
                <input type="password" required placeholder="Enter your Last Name" class="border rounded-lg border-gray-300 bg-white p-3 w-full
                 focus:outline-none focus:border-indigo-600 focus:border-3" />
            </div>

            <!-- Email -->
            <div class="space-y-2">
                <p class="text-sm font-medium">Email Address</p>
                <input type="text" required placeholder="Enter your Email" class="border rounded-lg border-gray-300 bg-white p-3 w-full
                 focus:outline-none focus:border-indigo-600 focus:border-3" />
            </div>

            <!-- Password -->
            <div class="space-y-2">
                <p class="text-sm font-medium">Password</p>
                <input type="password" required placeholder="Enter your Password" class="border rounded-lg border-gray-300 bg-white p-3 w-full
                 focus:outline-none focus:border-indigo-600 focus:border-3" />
            </div>

            <!-- Confirm Password -->
            <div class="space-y-2">
                <p class="text-sm font-medium">Confirm Password</p>
                <input type="confirm-password" required placeholder="Confirm your Password" class="border rounded-lg border-gray-300 bg-white p-3 w-full
                 focus:outline-none focus:border-indigo-600 focus:border-3" />
            </div>

            <!-- Agree ToS -->
            <div class="flex justify-between">
                <div class="flex items-center space-x-2 [&_span]:text-indigo-600 [&_span]:font-semibold [&_span]:hover:cursor-pointer">
                    <input type="checkbox" id="agree" required class="h-4 w-4" />
                    <label for="agree" class="text-sm text-gray-500">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
                </div>
            </div>

            
            <div>
                <LoginButtons>
                    <RouterLink to="/">Sign Up</RouterLink>
                </LoginButtons>
            </div>


            <div class="text-center text-sm">
                <p class="text-gray-500">Already have an account? <span
                        class="font-semibold text-indigo-600 hover:cursor-pointer">
                        <RouterLink to="/">Sign in</RouterLink>
                    </span></p>
            </div>



        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
