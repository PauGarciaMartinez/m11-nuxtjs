import getUserDetails from './../composables/getUserDetails.js'

export default {
  name: 'UserDetails',
  emits: ['addUserConsulted', 'addAlbumConsulted'],
  props: ['id'],
  setup(props) {
    const { user, error, loadUserDetails} = getUserDetails(props.id) 

    loadUserDetails()
    console.log(props.id)
    return { user, error }
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