<template>
  <div class="cards">
    <div class="card-tabs__wrapper ship-margin slide" key="card-tabs">
      <h2 class="card-tabs__header" v-on:click="toggleMobileTabMenu">Ships to Explore</h2>
      <ul class="card-tabs" v-bind:class="{ active: tabMenuActive }">
        <li
          class="tab"
          v-for="(tab, index) in tabs"
          :key="`tab-${index}`"
          v-bind:class="{
            'tab--active': activeTabIndex === index
          }"
          v-on:click="switchTab(index)">
          {{ tab.name }}
        </li>
      </ul>
    </div>
    <div class="card-body slide" v-for="(tab, index) in activeTabs" :key="`activeTab-${index}`">
      <h2 class="card-body__header">{{ tab.name }}</h2>
      <slideshow v-bind:images="tab.images" :key="componentKey"/>
      <div class="card-details">
        <p><span>Location: </span> {{ tab.location }}</p>
        <p><span>Coordinates: </span> {{ tab.coordinates }}</p>
        <p><span>Description: </span> {{ tab.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow.vue'
import shipData from '~/assets/data/shipData.js'

export default {
  components: {
    Slideshow
  },
  data() {
    return {
      activeTabs: shipData,
      activeTabIndex: 0,
      componentKey: 0,
      tabs: shipData,
      tabMenuActive: false
    }
  },
  computed: {
    isMobile() {
      return window.matchMedia('(max-width: 727px)').matches;
    },
  },
  methods: {
    switchTab(tabIndex) {
      this.activeTabs = this.tabs.filter((tab, index) => {
        return index === tabIndex;
      });
      this.activeTabIndex = tabIndex;
      this.toggleMobileTabMenu();
      this.forceRerender();
    },
    forceRerender() {
      this.componentKey += 1;  
    },
    initialDesktopTab() {
      if (!this.isMobile) {
        this.activeTabs = this.tabs.filter((tab, index) => {
          return index === 0;
        });
      }
    },
    toggleMobileTabMenu() {
      if (!this.isMobile) return;
      this.tabMenuActive = !this.tabMenuActive;
    }
  },
  mounted() {
    this.initialDesktopTab();
  }
}

</script>

<style lang="scss">
@import "../assets/scss/main.scss";

.ships {
  position: relative;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p, span {
    font-family: 'Spectral', serif;
    font-size: 21px;
    font-style: italic;
  }
}

.card-tabs {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: $break-small) {
    height: 0;
    padding: 0;
    transition: height .3s ease;
    overflow: hidden;

    &.active {
      height: 165px;
    }
  }

  &__wrapper {
    width: 22%;

    @media screen and (max-width: $break-small) {
      padding: 0 1rem;
    }
  }

  &__header {
    font-size: 29px;
    margin-top: 1rem;
    text-align: center;

    @media screen and (max-width: $break-small) {
      border: 2px solid $light-grey;
      // color: $rust;
      margin: 2.5rem auto 0;
      padding: 10px;
    }
  }

  li {
    cursor: pointer;
    display: block; 
    text-align: center;

    @media screen and (max-width: $break-small) {
      border-bottom: 2px solid $light-grey;
      padding: 10px;
    }
  }
}

.card-body {
  &__header {
    font-size: 32px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    padding: 0 0 1rem;

    @media screen and (max-width: $break-small) {
      border-top: 2px solid $white;
      padding: 1.5rem 0;
      margin-top: 2px;
    }
  }
}

.tab--active {
  color: $rust;
}

.card {
  &-details {
    margin-top: 1rem;

    @media screen and (max-width: $break-small) {
      margin: 1.5rem 0;
    }
  }

  &-body {
    width: 76%;
  }
}

@media screen and (max-width: $break-small) {
  .cards {
    flex-direction: column;
  }

  .card-tabs__wrapper {
    width: 100%;
  }

  .card-body {
    padding: 0 1rem;
    width: 100%;
  }
}

</style>
