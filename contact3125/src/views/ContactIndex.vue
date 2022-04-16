<template>
  <sui-segment id="upper-segment" color="teal">
    <div>
      <sui-label ribbon color="teal">Contacts</sui-label>
    </div>
    <div>
      <form @submit.prevent="submitHandler">
        <sui-input fluid placeholder="Search..." v-model="query" />
      </form>
    </div>

    <div class="add-button-wrapper">
      <router-link :to="{name:'ContactAdd'}">
        <sui-button id="add-button" color="orange">+ Add</sui-button>
      </router-link>
    </div>
  </sui-segment>
  <suspense>
    <template #fallback>loading..</template>
    <template #default>
      <sui-segment>
        <contact-card-list :query="query" key="cards" />
      </sui-segment>
    </template>
  </suspense>
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
      this.$router.push({ name: "ContactIndex", query: { q: this.query } });
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
  /* display: inline; */
}
#upper-segment {
  display: grid;
  grid-template-columns: 1fr 13fr 2fr;
  gap: 1%;
  align-items: center;
  justify-items: center;
}
#upper-segment :nth-child(2) {
  width: 100%;
}

.add-button-wrapper {
  width: 100%;
}
#add-button {
  width: 90%;
}
</style>