import { ref } from '@nuxtjs/composition-api'

const getUsers = () => {
  const users = ref([])    
  const error = ref(null)
  const empty = ref(null)

  const loadUsers = async () => {
    try {
      empty.value = false
      let usersData = await fetch('http://jsonplaceholder.typicode.com/users')
      if (!usersData) {
        throw Error('No users data available')
      }
      users.value = await usersData.json()
      empty.value = true
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { users, error, empty, loadUsers}
}

export default getUsers