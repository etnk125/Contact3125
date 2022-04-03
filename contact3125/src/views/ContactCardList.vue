<template>
  <sui-card-group>
    <ContactCard
      v-for="contact in contacts.filter((contact) =>
        contact.firstname.includes(this.query) ||
        contact.lastname.includes(this.query))"
      :contact="contact"
      :editRoute="{name:'ContactEdit'}"
      :deleteContact="deleteHandler"
      :key="'card-'+contact._id"
    />
  </sui-card-group>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { computed } from "vue";
import { deleteContact, getContactList } from "../services/contact.service";
import ContactCard from "../components/ContactCard.vue";

export default {
  props: {
    query: String,
  },
  data() {
    return { contacts: [] };
  },
  async created() {
    this.contacts = await getContactList();
  },
  components: { ContactCard },
  methods: {
    deleteContact,
    async deleteHandler(id) {
      try {
        const resp = await this.deleteContact(id);
        console.log(resp);
      } catch (err) {
        console.error(err);
      }
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.cards {
  justify-content: center;
}
</style>