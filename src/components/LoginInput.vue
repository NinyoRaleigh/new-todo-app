<!-- LoginInput.vue -->
<script setup>
defineProps({
  label: String, // Label above the input
  type: { type: String, default: 'text' }, // Input type (text, email, password)
  placeholder: String, // Placeholder text
  required: { type: Boolean, default: false } // Required or not
});
</script>

<template>
  <div class="space-y-2">
    <p class="text-sm font-medium">{{ label }}</p>
    <input
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="border rounded-lg border-gray-500 bg-white p-3 w-full
             focus:outline-none focus:border-indigo-600 focus:border-3"
    />
  </div>
</template>
