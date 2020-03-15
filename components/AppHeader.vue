<template>
  <header ref="header">
    <h1 class="title">
      <nuxt-link class="large-title" to="/">TBone's Shipyard</nuxt-link>
      <nuxt-link class="small-title" to="/">TBone's Ships</nuxt-link>
    </h1>
    <ul v-on:click="toggleNav" class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/ships">Ships</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
    <button v-on:click="toggleNav" class="mobile-nav__toggle">
      <span></span>
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNav: function(ev) {
      ev.stopPropagation();
      this.$refs.header.classList.toggle('nav-active');
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.title {
  display: block;
  color: $light-grey;
  letter-spacing: 1px;
}

.small-title {
  @media screen and (min-width: $break-small) {
    display: none;
  }
}

.large-title {
  @media screen and (max-width: $break-small) {
    display: none;
  }
}

header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem 2rem;

  @media screen and (max-width: $break-small) {
    padding: 1rem;
  }
}

.nav-list {
  display: flex;
  flex-direction: row;

  @media screen and (max-width: $break-small) {
    background-color: $peach;
    bottom: 0;
    flex-direction: column;
    left: 0;
    padding-top: 20%;
    position: fixed;
    top: 0;
    transform: translateX(100%);
    transition: transform .6s ease;
    width: 100vw;
    z-index: 20;
  }
}

@media screen and (max-width: $break-small) {
  .nav-active .nav-list {
    transform: translateX(0);
  }
}

.nav-item {
  display: block;
  padding: 0 0 0 1em;

  @media screen and (max-width: $break-small) {
    padding: .5em 0;
    text-align: center;
  }
}

.nav-item a {
  font-size: 24px;

  @media screen and (max-width: $break-small) {
    color: $rust;
  }
}

.mobile-nav__toggle {
  background: none;
  border: none;
  height: 30px;
  outline: none;
  position: relative;
  width: 30px;
  z-index: 999;

  span,
  span:before,
  span:after {
    background-color: $peach;
    width: 100%;
    height: 2px;
    right: 0;
    position: absolute;
    transform-origin: center;
    transition: transform .6s ease-out,
                background-color .6s ease-out,
                -webkit-transform .6s ease-out;
  }

  span:before,
  span:after {
    content: '';
  }

  span:before {
    top: 10px;
  }

  span:after {
    top: -10px;
  }

  @media screen and (min-width: $break-small) {
    display: none;
  }
}

.nav-active {
  span {
    background: 0 0;
  }

  span:before,
  span:after {
    background-color: $rust;
    top: 0;
  }

  span:before {
    transform: rotate(-45deg);
  }

  span:after {
    transform: rotate(45deg);
  }
}
</style>