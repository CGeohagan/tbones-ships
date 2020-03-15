<template>
  <ul class="nav-list">
    <li class="nav-item">
      <nuxt-link to="/about">About</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/ships">Ships</nuxt-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.nav-list {
  display: flex;
  flex-direction: row;
}

.nav-item {
  display: block;
  padding: 0 0 0 1em;
}

.nav-item a {
  font-size: 24px;
}
</style>
