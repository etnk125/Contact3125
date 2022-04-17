<template>
  <sui-card>
    <!-- main img -->
    <sui-image @click="cardClickHandler" :src="contact.imageUrl" />
    <!-- description -->
    <sui-card-content>
      <sui-card-header>{{contact.firstname}} {{contact.lastname}}</sui-card-header>
      <sui-card-meta>
        <p>{{contact.email}}</p>
        <span>{{contact.mobile}}</span>
      </sui-card-meta>
    </sui-card-content>
    <!-- action -->
    <sui-card-content extra>
      <router-link :to="{...editRoute, params:{id:contact.cid}   }">
        <sui-button icon color="blue">
          <sui-icon name="edit" />
        </sui-button>
      </router-link>
      <sui-button icon color="red" @click="deleteButtonClickHandler">
        <sui-icon name="trash alternate" />
      </sui-button>
    </sui-card-content>
  </sui-card>
  <contact-modal :contact="contact" :modal="contactModal" :closeModal="()=>(contactModal=false)" />
  <contact-delete-modal
    :contact="contact"
    :modal="contactDeleteModal"
    :closeModal="()=>(contactDeleteModal=false)"
    :deleteHandler="deleteHandler"
  />
</template>

<script>
import { onMounted } from "vue";
import ContactModal from "./ContactModal.vue";
import ContactDeleteModal from "./ContactDeleteModal.vue";

export default {
  props: {
    contact: Object,
    editRoute: Object,
    deleteContact: Function,
  },
  components: { ContactModal, ContactDeleteModal },
  data() {
    return {
      contactModal: false,
      contactDeleteModal: false,
    };
  },
  methods: {
    cardClickHandler() {
      // reset
      this.contactModal = false;
      this.contactDeleteModal = false;
      // apply
      this.contactModal = true;
    },
    deleteButtonClickHandler() {
      // reset
      this.contactModal = false;
      this.contactDeleteModal = false;
      // apply
      this.contactDeleteModal = true;
    },
    async deleteHandler() {
      this.contactDeleteModal = false;
      await this.deleteContact(this.contact.cid);
    },
  },
};
</script>
<style scoped>
.content {
  text-align: center;
}
.buttons {
  gap: 5px;
}
img:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.1s ease-in-out;
}
</style>
