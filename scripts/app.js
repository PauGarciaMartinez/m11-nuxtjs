import Autocomplete from './../components/Autocomplete.vue'

export default {
  name: 'App',
  data() {
    return {
      input: "",
      list: false,
      usersConsulted: [],
      albumsConsulted: []
    }
  },
  created () {
    this.$nuxt.$on('add-user-consulted', (user) => {
      let consulted = this.usersConsulted.findIndex(item => item.name === user.name)
      if (consulted === -1) {
        user.clicks = 1
        this.usersConsulted.push(user)
      } else {
        let userClicked = this.usersConsulted.find(item => item.name === user.name)
        userClicked.clicks++
      }
      console.log(this.usersConsulted)
    }),
    this.$nuxt.$on('add-album-consulted', (album) => {
      let consulted = this.albumsConsulted.findIndex(item => item.albumId === album.albumId)
      if (consulted === -1) {
        album.clicks = 1
        this.albumsConsulted.push(album)
      } else {
        let albumClicked = this.albumsConsulted.find(item => item.albumId === album.albumId)
        albumClicked.clicks++
      }
      console.log(this.albumsConsulted)
    }),
    this.$nuxt.$on('set-input', (username) => {
      this.input = username
      this.list = false
    }),
    this.$nuxt.$on('add-single-user', (user) => {
      let consulted = this.usersConsulted.findIndex(item => item.name === user.name)
      if (consulted === -1) {
        user.clicks = 1
        this.usersConsulted.push(user)
      } else {
        let userClicked = this.usersConsulted.find(item => item.name === user.name)
        userClicked.clicks++
      }
      console.log(this.usersConsulted)
    })
  },
  components: { Autocomplete }
}