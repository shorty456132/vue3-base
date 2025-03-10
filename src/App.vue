<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="bg-blue-600 text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex space-x-4">
          <RouterLink to="/" class="px-3 py-2 rounded hover:bg-blue-700" active-class="bg-blue-800">
            Home
          </RouterLink>

          <RouterLink
            to="/about"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-800"
          >
            About
          </RouterLink>
        </div>
      </div>
    </nav>

    <!-- Page content -->
    <main class="container mx-auto p-4">
      <RouterView />
    </main>
  </div>
</template>
