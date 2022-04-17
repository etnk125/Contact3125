<template>
  <div v-for="message in errMessages">
    <TheMessage :message="message.message" :ID="message.ID" />
  </div>
</template>

<script>
import store from "../store";
import TheMessage from "./TheMessage.vue";

export default {
  computed: {
    errMessages() {
      return store.errMessages;
    },
  },
  components: {
    TheMessage,
  },
};
</script>

<style>
</style>