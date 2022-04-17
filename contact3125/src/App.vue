<template>
  <TheNavbar />
  <Messages />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import Messages from "./components/Messages.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    Messages,
  },
};
</script>
