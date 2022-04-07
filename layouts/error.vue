<template>
  <div class="text-3xl font-bold underline" role="alert">
    <h1>Oops,Something went Wrong!!!</h1>
    <span>status code {{ error.statusCode }}</span>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
