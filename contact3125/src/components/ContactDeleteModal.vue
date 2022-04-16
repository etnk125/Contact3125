<template>
  <sui-modal basic v-model="modal">
    <div class="delete-modal-wrapper">
      <h2 class="delete-modal-header">
        <sui-modal-header icon>
          <sui-icon name="trash alternate" />Delete Contact
        </sui-modal-header>
      </h2>
      <sui-modal-content>
        <h4>Are you sure to delete contact ID:{{contact.cid}}</h4>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button color="red" inverted @click="deleteHandler">
          <sui-icon name="remove" />Delete
        </sui-button>
        <sui-button basic color="white" inverted @click="closeModal">
          <sui-icon name="checkmark" />Close
        </sui-button>
      </sui-modal-actions>
    </div>
  </sui-modal>
</template>

<script>
export default {
  props: {
    modal: Boolean,
    contact: Object,
    closeModal: Function,
    deleteHandler: Function,
  },
};
</script>

<style scoped>
.delete-modal-wrapper {
  text-align: center;
}
.delete-modal-wrapper > .header {
  align-items: center;
}
.delete-modal-wrapper > * {
  margin-top: 30px;
}
</style>