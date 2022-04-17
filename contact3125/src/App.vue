<template>
  <TheNavbar />
  <MessageList />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import MessageList from "./components/MessageList.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    MessageList,
  },
};
</script>
