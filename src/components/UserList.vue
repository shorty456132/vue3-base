<script setup lang="ts">
import { ref } from 'vue'
import UserCard from './UserCard.vue'
import { useUserStore } from '../stores/Users'

// Use the store
const userStore = useUserStore()

// Form state
const newName = ref('')
const newEmail = ref('')
const showForm = ref(false)

// Form handlers
function toggleForm() {
  showForm.value = !showForm.value
}

function handleAddUser() {
  if (newName.value && newEmail.value) {
    userStore.addUser(newName.value, newEmail.value)
    newName.value = ''
    newEmail.value = ''
    showForm.value = false
  }
}
</script>

<template>
  <div class="user-list p-4 max-w-md mx-auto">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">User List</h2>

      <button
        @click="toggleForm"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {{ showForm ? 'Cancel' : 'Add User' }}
      </button>
    </div>

    <!-- Add user form -->
    <div v-if="showForm" class="mb-4 p-4 border rounded bg-gray-50">
      <h3 class="text-lg font-semibold mb-2">Add New User</h3>

      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input
            v-model="newName"
            type="text"
            class="mt-1 block w-full border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="newEmail"
            type="email"
            class="mt-1 block w-full border-gray-300 rounded p-2"
          />
        </div>

        <button
          @click="handleAddUser"
          class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save User
        </button>
      </div>
    </div>

    <!-- User list -->
    <div v-if="userStore.users.length === 0" class="p-4 text-center text-gray-500">
      No users available.
    </div>

    <div v-else>
      <UserCard
        v-for="user in userStore.users"
        :key="user.id"
        :user="user"
        :is-selected="userStore.selectedUserId === user.id"
        @select="userStore.selectUser"
        @delete="userStore.deleteUser"
      />
    </div>

    <div v-if="userStore.selectedUserId" class="mt-4 p-3 bg-gray-100 rounded">
      <div v-if="userStore.getUserById(userStore.selectedUserId)">
        <h3 class="font-bold">Selected User Details:</h3>
        <p>{{ userStore.getUserById(userStore.selectedUserId)?.name }}</p>
        <p>{{ userStore.getUserById(userStore.selectedUserId)?.email }}</p>
      </div>
    </div>
  </div>
</template>
