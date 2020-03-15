<template>
  <footer><p>&copy;{{ this.currentYear }} TBone's Shipyard</p><p>Made by CBG</p></footer>
</template>

<script>
export default {
  computed: {
    currentYear () {
      const date = new Date();
      return date.getFullYear();
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

footer {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

@media screen and (max-width: $break-small) {
  footer {
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
}

footer p {
  color: $light-grey;
  font-size: 20px;
}
</style>