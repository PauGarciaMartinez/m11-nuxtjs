import axios from 'axios'

export default {
  name: 'Pictures',
  data() {
    return {
      album: [],
      error: null
    }
  },
  async created() {
    try {
      const res = await axios.get('http://jsonplaceholder.typicode.com/photos/')
      this.album = res.data
      this.album = this.album.filter((album) => album.albumId == this.$route.params.id)
    } catch (err) {
      this.error = err
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}