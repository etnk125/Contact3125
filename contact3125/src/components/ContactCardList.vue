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

export default {
  props: {
    query: String,
  },
  data() {
    return {
      // contacts: [],
    };
  },
  async setup() {
    const contacts = ref(await getContactList());
    return { contacts };
  },
  // async created() {
  //   this.fetchContact();
  // },
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
      this.fetchContact();
    },
    async fetchContact() {
      this.contacts = await getContactList();
    },
  },
};
</script>

<style scoped>
.cards {
  justify-content: center;
}
</style>