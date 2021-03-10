<!-- TEMPLATE -->
<template>
  <div>

    <nav class="nav">
      <div class="logo-container">
        <img class="logo" alt="Vue logo" src="./../assets/logo.png">
      </div>
      <div class="menu-container">
        <nuxt-link :to="{ name: 'index', query: { usersConsulted: usersConsulted, albumsConsulted: albumsConsulted }}">Home</nuxt-link>
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
          <Autocomplete :inputSearch="input" :resultsList="list" />
        </div>
        <nuxt-link class="router-link" :to="{ name: 'Users', query: { inputSearch: input }}">
          <button class="search-btn">Search</button>
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
