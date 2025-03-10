<script setup lang="ts">
import { ref } from 'vue'
import UserCard from './UserCard.vue'

// Define a User type
interface User {
  id: number
  name: string
  email: string
}

// Create reactive state
const users = ref<User[]>([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
])

const selectedUserId = ref<number | null>(null)

// Event handlers
function selectUser(id: number) {
  selectedUserId.value = id
}

function deleteUser(id: number) {
  const index = users.value.findIndex((user) => user.id === id)
  if (index !== -1) {
    users.value.splice(index, 1)

    // Clear selection if the selected user was deleted
    if (selectedUserId.value === id) {
      selectedUserId.value = null
    }
  }
}
</script>

<template>
  <div class="user-list p-4 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">User List</h2>

    <div v-if="users.length === 0" class="p-4 text-center text-gray-500">No users available.</div>

    <div v-else>
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        :is-selected="selectedUserId === user.id"
        @select="selectUser"
        @delete="deleteUser"
      />
    </div>

    <div v-if="selectedUserId" class="mt-4 p-3 bg-gray-100 rounded">
      <p>Selected User ID: {{ selectedUserId }}</p>
    </div>
  </div>
</template>
