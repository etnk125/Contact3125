<template>
  <!-- <div @click="onDelete">this is message{{message}}{{ID}}</div> -->
  <sui-message negative>
    <sui-icon name="close" @click="onDelete" />
    <sui-message-header>{{message||"something went wrong"}}</sui-message-header>
  </sui-message>
</template>

<script>
import store from "../store";
export default {
  props: {
    message: String,
    ID: String | Number,
  },
  methods: {
    onDelete() {
      store.removeMessage(this.ID);
    },
  },
};
</script>

<style>
</style>