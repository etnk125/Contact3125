<template>
  <sui-segment color="teal">
    <sui-label ribbon color="teal">Contacts</sui-label>
    <!-- fix this later -->
    <form @submit.prevent="submitHandler">
      <sui-input icon="search" placeholder="Search..." v-model="query" />
      <!-- <sui-input action="Search" placeholder="Search..." v-model="query" /> -->
    </form>
    <!-- fix this later -->
    <sui-button color="orange">+ Add</sui-button>
  </sui-segment>

  <sui-segment>
    <!-- <ContactCardList :query="query" /> -->
    <contact-card-list :query="query" />
    <!-- card list -->
  </sui-segment>
</template>

<script>
import { ref, onMounted } from "vue";
import ContactCardList from "./ContactCardList.vue";
import { getContactList } from "../services/contact.service";
import { useRoute } from "vue-router";

export default {
  data() {
    return { query: useRoute().query.q || "" };
  },
  components: {
    ContactCardList,
  },
  methods: {
    submitHandler() {
      console.log(this.query);
      this.$router.push({ name: "contact", query: { q: this.query } });
      // this.query = "";
    },
    async fetchData() {
      const data = await getContactList();
      return data;
    },
  },
};
</script>

<style scoped>
form {
  display: inline;
}
</style>