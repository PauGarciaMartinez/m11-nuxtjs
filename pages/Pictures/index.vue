<!-- TEMPLATE -->
<template>
  
  <div>

    <button @click="goBack" class="back-btn">Go back</button>

    <header>
      <h1>Albums</h1>
    </header>

    <section v-if="error">
      <p>{{ error }}</p>
    </section>

    <section class="albums-wrapper" v-if="albums">
      <article class="album-container" v-for="album in albums" :key="album.albumId">
        <p class="album-name">Album {{ album.albumId }}</p>
        <nuxt-link :to="'Pictures/' + album.albumId" class="router-link">
          <button class="album-btn" @click="addAlbumConsulted(album)">See pictures</button>
        </nuxt-link>
      </article>
    </section>

  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../../scripts/pictures.js"></script>

<!-- STYLE -->
<style src="./../../styles/css/pictures.css"></style>