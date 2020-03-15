<template>
  <div class="intro">
    <div class="intro__text ship-margin">
      <p>
        Beautiful model ships constructed by hand, using only materials that would be found on real ships. Hulls are made
        of solid wood, cannons are brass or bronze, and real copper is used to mimic the olden days when hulls were coppered
        to keep off barnacles.
      </p>
    </div>
    <figure class="intro__figure"><img src="/images/frontimage.jpg"></figure>
    <p class="cta"><nuxt-link to="/ships">See the ships</nuxt-link></p>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Ship from '~/components/Ship.vue'

export default {
  components: {
    AppLogo,
    Ship
  }
}

</script>

<style lang="scss">
@import "../assets/scss/main.scss";

.intro {
  padding: 2rem 0;
  position: relative;
  text-align: center;

  h2, p {
    color: $light-grey;
    font-family: 'Alata', sans-serif;
    font-size: 24px;
  }
}

.intro__text {
  padding: 0 0 2rem;
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
}

.intro__figure {
  margin: 0 auto;
  width: 80%;
}

.cta {
  border-bottom: 2px solid $rust;
  display: inline-block;
  margin: 1.5rem auto 0;
  padding: 10px;
}

@media screen and (max-width: $break-small) {
  .intro {
    padding: 2rem 1rem 1rem;

    &__figure {
      width: 100%;
    }
  }
}
</style>
