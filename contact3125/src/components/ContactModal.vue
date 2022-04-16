<template>
  <sui-modal v-model="modal">
    <sui-modal-header>{{contact.firstname}} {{contact.lastname}}</sui-modal-header>
    <sui-modal-content image>
      <sui-image wrapped size="medium" :src="contact.imageUrl" />
      <sui-modal-description>
        <sui-header>Contact ID: {{contact.cid}}</sui-header>
        <p v-if="contact.email!=''">Email : {{contact.email}}</p>
        <p v-if="contact.mobile!=''">Mobile : {{contact.mobile}}</p>
        <p v-if="contact.facebook!=''">Facebook : {{contact.facebook}}</p>
      </sui-modal-description>
    </sui-modal-content>

    <sui-modal-actions>
      <sui-button positive v-if="contact.facebook!=''">
        <a :href="contact.facebook" target="_blank">view profile</a>
      </sui-button>
      <sui-button @click="closeModal()">close</sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
  props: {
    modal: Boolean,
    contact: Object,
    closeModal: Function,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>