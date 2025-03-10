<script setup lang="ts">
//Define the props using TypeScript
interface User {
  id: number
  name: string
  email: string
}

//Define the props the component accepts
const props = defineProps<{
  user: User
  isSelected?: boolean
}>()

//Define the events the component emits
const emit = defineEmits<{
  (e: 'select', id: number): void
  (e: 'delete', id: number): void
}>()

//Handler functions
function handleSelect() {
  emit('select', props.user.id)
}
</script>

<template>
  <div
    class="user-card p-4 border rounded mb-2"
    :class="{ 'bg-blue-50 border-blue-300': isSelected }"
  >
    <h3 class="text-lg font-semibold">{{ user.name }}</h3>
    <p class="text-gray-600">{{ user.email }}</p>
    <div class="mt=3 flex space-x-2">
      <button
        @click="handleSelect"
        class="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Select
      </button>
      <button
        @click="handleDelete"
        class="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
</template>
