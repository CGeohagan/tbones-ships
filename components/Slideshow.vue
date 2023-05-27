<template>
  <div class="slideshow__wrapper">
    <div class="slideshow__arrows">
      <div
        v-on:click="leftClick"
        class="arrow arrow-left"
        :class="[activeIndex === 0 ? 'hidden' : '']"
      >
        <arrow />
      </div>
      <div
        v-on:click="rightClick"
        class="arrow arrow-right"
        :class="[activeIndex === numberOfImages - 1 ? 'hidden' : '']"
      >
        <arrow />
      </div>
    </div>
    <div class="slideshow">
      <ul class="slideshow__list" :style="slideshowStyle">
        <li
          v-for="(image, index) in images"
          :key="`item-${index}`"
          :class="[index === activeIndex ? 'active' : 'inactive']"
          :style="slideStyle"
          class="slideshow__item"
          ref="slides"
        >
          <img :src="image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Arrow from "~/components/Arrow.vue";

export default {
  components: {
    Arrow
  },
  props: ["images"],
  computed: {
    slideshowStyle() {
      const currentTransform = (this.activeIndex * 100) / this.numberOfImages;
      return `width: ${this.numberOfImages *
        100}%; transform: translateX(-${currentTransform}%)`;
    },
    slideStyle() {
      return `width: ${100 / this.numberOfImages}%;`;
    }
  },
  methods: {
    rightClick: function(ev) {
      ev.stopPropagation();
      if (this.activeIndex === this.numberOfImages - 1) {
        return;
      }

      this.activeIndex++;
    },
    leftClick: function(ev) {
      ev.stopPropagation();
      if (this.activeIndex === 0) {
        return;
      }

      this.activeIndex--;
    }
  },
  data() {
    return {
      activeIndex: 0,
      numberOfImages: this.images.length
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.slideshow {
  min-height: 200px;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: $break-small) {
    min-height: 300px;
  }

  @media screen and (min-width: 990px) {
    min-height: 375px;
  }

  @media screen and (min-width: 1100px) {
    min-height: 440px;
  }

  @media screen and (min-width: 1220px) {
    min-height: 470px;
  }

  &__arrows {
    align-items: center;
    display: flex;
    justify-content: space-between;
    left: 5%;
    position: absolute;
    top: 44%;
    width: 90%;
    z-index: 10;

    @media screen and (max-width: $break-small) {
      left: 2.5%;
      width: 95%;
    }
  }

  &__item {
    transition: transform 0.4s ease-out;
  }

  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    transition: all 0.4s ease-out;
  }

  &__wrapper {
    border: 4px double white;
    padding: 2em;
    position: relative;
    width: 100%;

    @media screen and (max-width: $break-small) {
      border: none;
      padding: 0;
    }
  }
}

.arrow {
  align-items: center;
  color: $dark-blue;
  display: flex;
  cursor: pointer;
  transform-origin: center center;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  width: 60px;

  &:hover {
    transform: scale(1.05);
  }
}

.arrow-left {
  transform: rotate(-180deg);
  &:hover {
    transform: rotate(-180deg) scale(1.05);
  }
}

.hidden {
  opacity: 0;
}
</style>
