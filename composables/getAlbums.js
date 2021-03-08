import { ref } from '@nuxtjs/composition-api'

const getAlbums = () => {
  const albums = ref([])    
  const error = ref(null)

  const loadAlbums = async () => {
    try {
      let albumsData = await fetch('http://jsonplaceholder.typicode.com/photos')
      if (!albumsData) {
        throw Error('No album data available')
      }
      albums.value = await albumsData.json()
      // Filtering albums to display unique ones
      const filteredAlbums = new Set()
      albums.value = albums.value.filter(album => !filteredAlbums.has(album.albumId) && filteredAlbums.add(album.albumId))
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { albums, error, loadAlbums}
}

export default getAlbums