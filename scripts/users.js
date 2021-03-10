import axios from 'axios'

export default {
  name: 'Users', 
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  data() {
    return {
      users: [],
      error: null,
      empty: false
    }
  },
  async created() {
    try {
      this.empty = false
      const res = await axios.get('http://jsonplaceholder.typicode.com/users/')
      this.users = res.data
      this.empty = true
      console.log(this.$route.query.inputSearch)
    } catch (err) {
      this.error = err
    }
  },
  computed: {
    filteredUsers() {
      if (this.$route.query.inputSearch) {
        return this.users.filter(user => user.name.toLowerCase().includes(this.$route.query.inputSearch.toLowerCase()))
      } else {
        return this.users
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    caps(name) {
      return name.toUpperCase()
    },
    addUserConsulted(user) {
      this.$emit('add-user-consulted', user)
    }
  }
}