<template>
  <sui-menu stackable inverted>
    <sui-menu-item>
      <img src="../assets/logo.png" alt="contact page" />
    </sui-menu-item>

    <sui-menu-item>{{headerText}}</sui-menu-item>

    <sui-menu-menu position="right">
      <sui-menu-item id="icon">
        <sui-icon name="user" />
      </sui-menu-item>
      <sui-menu-item disabled></sui-menu-item>
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
export default {
  props: {
    headerText: String,
  },
};
</script>
<style>
</style>