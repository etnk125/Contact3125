<template>
  <Message
    v-for="message in errMessages"
    :message="message.message"
    :ID="message.ID"
    :key="'message-'+message.ID"
  />
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