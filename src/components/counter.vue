<script setup lang="ts">
import { ref } from 'vue'

// Create a typed reactive reference
const count = ref<number>(0)

// Type-save functions
function increment(): void {
  count.value++
}

function decrement(): void {
  count.value--
}
</script>

<template>
  <div class="flex justify-center space-x-4">
    <h2 class="text-xl font-bold mb-4">Counter Component</h2>
    <p class="text-3xl font-semibold text-center my-4">{{ count }}</p>

    <div class="flex justify-center space-x-4">
      <button @click="decrement" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        -
      </button>
      <button
        @click="increment"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  </div>
</template>
