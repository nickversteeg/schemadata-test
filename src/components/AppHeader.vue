<template>
  <div>
    <h1>{{ this.$store.getters.firstName }}</h1>
    <h1>{{ this.$store.getters.firstName }}</h1>
    <h1>{{ this.$store.getters.firstName }}</h1>
    <h1>{{ this.$store.getters.firstName }}</h1>
    <h1>{{ this.$store.getters.firstName }}</h1>
    <h1>{{ this.$store.getters.firstName }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes funny {
  0% {
    transform: rotateZ(0deg) translate(0px, 500px);
  }
  50% {
    transform: rotateZ(180deg) translate(0px, 700px);
  }
  100% {
    transform: rotateZ(360deg) translate(0px, 500px);
  }
}

h1 {
  animation-name: funny;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
