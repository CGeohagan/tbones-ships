<template>
  <div class="content">
    <div class="ship-margin">
      <h1 class="title">
        About
      </h1>
      <div class="about__wrapper">
        <div class="about__text">
          <p>
            My interest in model ship building started with my grandfather John Fink. He had an antique replica of the Santa Maria
            in his living room. My name is Tom (my kids call me TBone), and I've constructed many model ships over the years, becoming more practiced
            with each ship constructed. I'm excited to be able to share them with you. If you'd like to learn more about these ships, please <a href="mailto:tmmc86@gmail.com" target="_blank">email me</a>.
          </p>
          <p>
            This image was taken at my daughter Megan's wedding. When I'm not building ships, I'm usually playing tennis with my wife Marilyn or reading about the Civil War.
          </p>
        </div>
        <div class="about__image">
          <img src="/images/dadandmegan.jpg" alt="Tom and Megan dancing at her wedding">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.content {
  padding: 2rem 0 0;
}

.title {
  text-align: center;
}

.about {
  &__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  &__text {
    width: 50%;

    p {
      font-size: 20px;
      margin-bottom: 1rem;
    }
  }

  &__image {
    width: 45%;
  }

  @media screen and (max-width: $break-small) {
    &__wrapper {
      flex-direction: column;
      margin: 1.5rem auto;
    }

    &__text,
    &__image {
      width: 100%;
    }
  }
}
</style>
