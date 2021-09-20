<template>
  <div>
    <input
      type="button"
      value="Get project schemas"
      @click="getProjectSchemas"
    />
    <div>
      {{ this.$store.getters.firstName }}
    </div>
    <div v-if="respJson">
      <pre v-highlightjs><code class="json">{{respJson}}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchemaDataTester",
  data() {
    return {
      message: "",
      respJson: "",
    };
  },
  methods: {
    async getProjectSchemas() {
      // Shows while waiting for data to be collected from API.
      this.message = "Loading data";

      this.$store.commit("firstName", "Joey");

      const response = await fetch(
        "https://ti-schema-service.azurewebsites.net/schema-data/Project"
      );
      const data = await response.json();

      // Format JSON properly with 4 space indents
      this.respJson = JSON.stringify(data, null, 4);

      // Clears "waiting for data" message once data is loaded.
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
pre {
  text-align: left;
}
</style>
