export default {
  name: 'Home',
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  props: ['usersConsulted', 'albumsConsulted'],
  data() {
    return {
      usersVisited: [],
      albumsVisited: []
    }
  },
  mounted() {
    if (this.usersConsulted) {
      this.usersVisited = JSON.parse(this.usersConsulted)
    }

    if (this.albumsConsulted) {
      this.albumsVisited = JSON.parse(this.albumsConsulted)
    }
  }
}