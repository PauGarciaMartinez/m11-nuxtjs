import { computed } from '@nuxtjs/composition-api'
import getUsers from './../composables/getUsers.js'

export default {
  name: 'Users', 
  props: ['inputSearch'],
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  setup(props) {
    const { users, error, empty, loadUsers} = getUsers()

    loadUsers()
    
    const matchingUsers = computed(() => {
      if (props.inputSearch) {
        return users.value.filter(user => user.name.toLowerCase().includes(props.inputSearch.toLowerCase()))
      } else {
        return users.value
      }
    })
    
    return { users, error, empty, matchingUsers }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    caps(name) {
      return name.toUpperCase()
    },
    addUserConsulted(user) {
      this.$nuxt.$emit('add-user-consulted', user)
    }
  }
}