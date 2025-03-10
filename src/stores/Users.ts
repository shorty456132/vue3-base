import { defineStore } from 'pinia'
import { ref } from 'vue'

// Define a User interface
interface User {
  id: number
  name: string
  email: string
}

export const useUserStore = defineStore('users', () => {
  // State
  const users = ref<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ])

  const selectedUserId = ref<number | null>(null)

  // Actions
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

  function addUser(name: string, email: string) {
    // Generate a new ID
    const newId = users.value.length ? Math.max(...users.value.map((u) => u.id)) + 1 : 1

    users.value.push({
      id: newId,
      name,
      email,
    })
  }

  // Getters
  function getUserById(id: number) {
    return users.value.find((user) => user.id === id)
  }

  return {
    // State
    users,
    selectedUserId,

    // Actions
    selectUser,
    deleteUser,
    addUser,

    // Getters
    getUserById,
  }
})
