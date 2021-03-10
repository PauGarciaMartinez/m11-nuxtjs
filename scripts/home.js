export default {
  name: 'Home',
  data() {
    return {
      usersVisited: [],
      albumsVisited: []
    }
  },
  mounted() {
    if (this.$route.query.usersConsulted) {
      this.usersVisited = this.$route.query.usersConsulted
    }

    if (this.$route.query.albumsConsulted) {
      this.albumsVisited = this.$route.query.albumsConsulted
    }
  }
}