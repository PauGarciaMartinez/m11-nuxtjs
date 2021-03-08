<!-- TEMPLATE -->
<template>
  
  <div>

    <button @click="goBack()" class="back-btn">Go back</button>

    <header>
      <h1>User Details</h1>
    </header>

    <section v-if="error">
      <p>{{ error }}</p>
    </section>

    <section v-if="user">
      <article class="user-card">
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

  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../../../scripts/user-details.js"></script>

<!-- STYLE -->
<style src="./../../../styles/css/user-details.css"></style>