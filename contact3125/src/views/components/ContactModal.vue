<template>
  <sui-modal v-model="modal">
    <sui-modal-content>{{contact}}</sui-modal-content>
    <sui-modal-actions>
      <sui-button positive @click="closeModal()">view profile</sui-button>
      <sui-button @click="closeModal()">close</sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
  props: {
    modal: false,
    contact: Object,
    closeModal: Function,
  },
};
</script>

<style>
</style>