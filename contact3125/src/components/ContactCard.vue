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
      <sui-button icon color="red">
        <sui-icon name="erase" />
      </sui-button>
    </sui-card-content>
  </sui-card>
  <contact-modal :contact="contact" :modal="modal" :closeModal="()=>(modal=false)" />
</template>

<script>
import { onMounted } from "vue";
import ContactModal from "./ContactModal.vue";

export default {
  props: {
    contact: Object,
    editRoute: Object,
  },
  components: { ContactModal },
  data() {
    return { modal: false };
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
</style>
