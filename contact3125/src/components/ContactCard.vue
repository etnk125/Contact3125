<template>
  <sui-card @click="modal=true">
    <!-- main img -->
    <sui-image src="https://nightswinger.github.io/vue-fomantic-ui/images/avatar/large/kristy.png" />
    <!-- description -->
    <sui-card-content>
      <sui-card-header>{{contact.firstname}} {{contact.lastname}}</sui-card-header>
      <sui-card-meta>
        <p>{{contact.email}}</p>
        <span>{{contact.mobile}}</span>
      </sui-card-meta>
    </sui-card-content>
    <!-- action -->
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
</style>
