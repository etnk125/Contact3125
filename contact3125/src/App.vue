<template>
  <TheNavbar />
  <router-view />
</template>

<script>
import TheNavbar from "./views/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>
