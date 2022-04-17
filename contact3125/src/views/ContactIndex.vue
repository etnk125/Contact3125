<template>
  <sui-segment>
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
      <template #fallback>
        <sui-icon name="spinner" loading />
      </template>
      <template #default>
        <sui-segment>
          <contact-card-list :query="query" />
        </sui-segment>
      </template>
    </suspense>
  </sui-segment>
</template>

<script>
import { ref, onMounted } from "vue";
import ContactCardList from "../components/ContactCardList.vue";
import { getContactList } from "../services/contact.service";
import { useRoute } from "vue-router";
import store from "../store";

export default {
  data() {
    return { query: useRoute().query.q || "" };
  },
  components: {
    ContactCardList,
  },
  methods: {
    submitHandler() {
      this.$router.push({ name: "ContactIndex", query: { q: this.query } });
    },
    async fetchData() {
      try {
        const data = await getContactList();
        return data;
      } catch (err) {
        store.addMessage("something went wrong");
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
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
.loading {
  display: flex;
  margin: 2rem auto;
  justify-self: center;
}
</style>