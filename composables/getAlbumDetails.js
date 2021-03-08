import { ref } from '@nuxtjs/composition-api'

const getAlbum = (id) => {
  const album = ref([])    
  const error = ref(null)

  const loadAlbum = async () => {
    try {
      let albumData = await fetch('http://jsonplaceholder.typicode.com/photos/')
      if (!albumData) {
        throw Error('No album data available')
      }
      album.value = await albumData.json()
      // To show only the photos from the same album
      album.value = album.value.filter((album) => album.albumId == id)
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { album, error, loadAlbum}
}

export default getAlbum