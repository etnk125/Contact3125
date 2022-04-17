<template>
  <sui-card-group>
    <ContactCard
      v-for="contact in contacts.filter((contact) =>
        contact.firstname.toLowerCase().includes(query.toLowerCase()) ||
        contact.lastname.toLowerCase().includes(query.toLowerCase()))"
      :contact="contact"
      :editRoute="{name:'ContactEdit'}"
      :deleteContact="deleteHandler"
      :key="'card-'+contact._id"
    />
  </sui-card-group>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { computed, ref } from "vue";
import { deleteContact, getContactList } from "../services/contact.service";
import ContactCard from "../components/ContactCard.vue";

import store from "../store";

export default {
  props: {
    query: String,
  },
  async setup() {
    let contacts = [];
    try {
      contacts = ref(await getContactList());
    } catch (err) {
      store.addMessage("something went wrong");
      console.error(err);
    }
    return { contacts };
  },
  components: { ContactCard },
  methods: {
    deleteContact,
    async deleteHandler(id) {
      try {
        const resp = await this.deleteContact(id);
      } catch (err) {
        store.addMessage("something went wrong");
        console.error(err);
      }
      this.fetchContact();
    },
    async fetchContact() {
      try {
        this.contacts = await getContactList();
      } catch (err) {
        store.addMessage("something went wrong");
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.cards {
  justify-content: center;
}
</style>