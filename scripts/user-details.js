import axios from 'axios'

export default {
  name: 'UserDetails',
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  data() {
    return {
      user: null,
      error: null
    }
  },
  async created() {
    try {
      const res = await axios.get('http://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
      this.user = res.data
    } catch (err) {
      this.error = err
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    caps(name) {
      return name.toUpperCase()
    }
  }
}