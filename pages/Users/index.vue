<!-- TEMPLATE -->
<template>

  <div>
    
    <button @click="goBack" class="back-btn">Go back</button>

    <header>
      <h1>Users</h1>
    </header>

    <section v-if="error">
      <p>{{ error }}</p>
    </section>

    <section class="users-wrapper" v-if="matchingUsers.length > 1">
      
      <article class="user-container" v-for="user in matchingUsers" :key="user.id">
        <p class="user-name">{{ caps(user.name) }}</p>
        <nuxt-link :to="'Users/' + user.id" class="router-link">
        <p>{{ user.id }}</p>
          <button class="user-btn" @click="addUserConsulted(user)">More info</button>
        </nuxt-link>
      </article>
    
    </section>

    <section v-if="matchingUsers.length === 1">
      
      <article class="user-card" v-for="user in matchingUsers" :key="user.id">
        <h3 class="user-title">{{ caps(user.name) }}</h3>
        <div class="user-info">
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Web:</strong> {{ user.website }}</p>
          <p><strong>City:</strong> {{ user.address.city }}</p>
          <p><strong>Street:</strong> {{ user.address.street }}</p>
          <p><strong>Suite:</strong> {{ user.address.suite }}</p>
          <p><strong>Zipcode:</strong> {{ user.address.zipcode }}</p>
        </div>
      </article>
    
    </section>
    
    <section class="users-wrapper" v-if="!matchingUsers.length && empty">

      <transition name="empty">
        <article class="empty-container">
          <p>No users matching</p>
        </article>
      </transition>

    </section>

  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../../scripts/users.js"></script>

<!-- STYLE -->
<style src="./../../styles/css/users.css"></style>