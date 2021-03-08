import getAlbums from './../composables/getAlbums.js'

export default {
  name: 'Pictures', 
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  setup() {
    const { albums, error, loadAlbums} = getAlbums()

    loadAlbums()

    return { albums, error }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    addAlbumConsulted(album) {
      this.$emit('add-album-consulted', album)
    }
  }
}