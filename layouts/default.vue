<!-- TEMPLATE -->
<template>
  <div>

    <nav class="nav">
      <div class="logo-container">
        <img class="logo" alt="Vue logo" src="./../assets/logo.png">
      </div>
      <div class="menu-container">
        <nuxt-link :to="{ name: 'index', params: { usersConsulted: usersConsulted, albumsConsulted: albumsConsulted }}">Home</nuxt-link>
        <nuxt-link :to="{ name: 'Users' }">Users</nuxt-link> 
        <nuxt-link :to="{ name: 'Pictures' }">Pictures</nuxt-link> 
      </div>
      <div class="search-container">
      <div class="blanket" v-if="list" @click="list = false"></div>
        <div class="list-container">
          <input 
            class="search-bar" 
            type="text" 
            placeholder="Search a user..."
            v-model="input"
            @focus="list = true">
          <Autocomplete :inputSearch="input" @setInput="updateInput" :resultsList="list" />
          <!-- @add-single-user="userUp" -->
        </div>
        <nuxt-link class="router-link" :to="{ name: 'Users', params: { inputSearch: input }}">
          <button class="search-btn" @click="showUsers">Search</button>
        </nuxt-link> 
      </div>
    </nav>

    <Nuxt />

    <footer class="footer">
      <p>Created by Pau Garcia</p>
    </footer>

  </div>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/app.js"></script>

<!-- STYLE -->
<style src="./../styles/css/app.css"></style>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}




.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: #35495e;
  margin: 1.3rem auto;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
