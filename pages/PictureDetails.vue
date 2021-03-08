<!-- TEMPLATE -->
<template>

  <div>

    <button @click="goBack" class="back-btn">Go back</button>

    <header>
      <h1>Pictures</h1>
    </header>

    <section v-if="error">
      <p>{{ error }}</p>
    </section>

    <section class="pictures-wrapper">
      <article v-for="picture in album" :key="picture.id">
        <img :src="picture.url" alt="Another dull photo">
      </article>
    </section>

  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/picture-details.js"></script>

<!-- STYLE -->
<style src="./../styles/css/picture-details.css"></style>