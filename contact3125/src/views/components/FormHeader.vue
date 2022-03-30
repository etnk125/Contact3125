<template>
  <sui-header as="h2">
    {{formName}}
    <sui-label :color="formColor">{{formType}}</sui-label>
  </sui-header>
</template>

<script>
export default {
  props: {
    formName: String,
    formType: String,
    formColor: String,
  },
};
</script>

<style>
</style>