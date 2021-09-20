<template>
  <div id="app">
    <AppHeader />
    <SchemaDataTester />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SchemaDataTester from "./components/SchemaDataTester.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    SchemaDataTester,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
