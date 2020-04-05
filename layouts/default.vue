<template>
  <div class="container" >
    <app-header />
      <main>
        <div class="border">
          <section :class="{
            'index' : (page === 'index'),
            'about' : (page === 'about'),
            'ships' : (page === 'ships')
          }">
            <ship/>
            <transition name="slide">
              <nuxt/>
            </transition>
          </section>
        </div>
      </main>
    <app-footer />
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import Ship from '~/components/Ship.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppLogo,
    AppHeader,
    AppFooter,
    Ship
  },
  computed: {
    ...mapState(['page'])
  },
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";

.container {
  background-color: $dark-blue;
  flex-direction: column;
  min-height: 100vh;
}

main {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2em;
  position: relative;
  width: 100%;

  @media screen and (max-width: $break-small) {
    padding: 0;
  }
}

.border {
  border: 1em solid $light-grey;
  height: 100%;
  min-height: calc(100vh - 130px);
  padding: 2em;
  position: relative;

  @media screen and (max-width: $break-small) {
    padding: 0;
    border: none;
  }
}

// Transitions

.hidden main {
  opacity: 0;
}

main {
  transition: opacity .5s ease-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>

