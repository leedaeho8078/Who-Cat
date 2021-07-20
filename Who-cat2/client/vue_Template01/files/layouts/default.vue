<template>
  <div class="page-wrapper">
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: "Who Cat 누구냥"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

<style></style>
