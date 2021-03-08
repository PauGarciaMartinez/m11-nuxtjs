<!-- TEMPLATE -->
<template>
  <div class="search-list" v-if="resultsList">
    <div class="user-list" v-for="user in matchingUsers" :key="user.id" @click="setInput(user.name), addSingleUser(user)">
      <p>{{ user.name }}</p>
    </div>
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/autocomplete.js"></script>

<!-- STYLE -->
<style src="./../styles/css/autocomplete.css"></style>