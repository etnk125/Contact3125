<template>
  <div v-for="message in errMessages">
    <Message :message="message.message" :ID="message.ID" />
  </div>
</template>

<script>
import store from "../store";
import Message from "./Message.vue";

export default {
  computed: {
    errMessages() {
      return store.errMessages;
    },
  },
  components: {
    Message,
  },
};
</script>

<style>
</style>