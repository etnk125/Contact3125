<template>
  <sui-menu inverted>
    <router-link :to="{path:'/'}">
      <sui-menu-item>
        <img src="../assets/logo.png" alt="contact page" />
      </sui-menu-item>
    </router-link>

    <router-link :to="{name:'Contact'}">
      <sui-menu-item>Contact</sui-menu-item>
    </router-link>

    <sui-menu-menu position="right">
      <router-link :to="{name:'Login'}">
        <sui-menu-item>
          <sui-icon name="user" />
        </sui-menu-item>
      </router-link>
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
export default {};
</script>
<style>
</style>