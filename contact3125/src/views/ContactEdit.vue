<template>
  <div class="segment-container">
    <sui-segment-group>
      <!-- header -->
      <sui-segment>
        <form-header formName="Contact" formType="Edit" formColor="teal" />
      </sui-segment>
      <!-- body -->
      <sui-segment>
        <form-body
          :submitHandler="submitHandler"
          :contact="this.contact"
          :edit="true"
          :dimmed="saved"
          :onClose="()=>{saved=false}"
        />
      </sui-segment>
    </sui-segment-group>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { editContact, getContact } from "../services/contact.service";

import FormHeader from "../components/FormHeader.vue";
import FormBody from "../components/FormBody.vue";

import store from "../store";

export default {
  data() {
    return {
      contact: {
        cid: "",
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        facebook: "",
        imageUrl: "",
      },
      saved: false,
    };
  },
  components: {
    FormHeader,
    FormBody,
  },
  methods: {
    async submitHandler() {
      this.saved = false;
      try {
        const resp = await editContact(this.contact);
        console.log(resp);
        if (resp.code == 11000) {
          //implement unique handle here
          store.addMessage("please enter unique id");
          console.error("please enter unique id");
          return;
        }
      } catch (err) {
        store.addMessage("something went wrong");
        console.error(err);
      }
      this.saved = true;
    },
  },
  async created() {
    try {
      this.contact = await getContact(useRoute().params.id);
      console.log(this.contact);
    } catch (err) {
      console.log("error occur when get contact by id");
      store.addMessage("error occur when get contact by id");
      console.error(err);
    }
  },
};
</script>

<style scoped>
.segment-container {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 60ch) 1fr;
}
.segments {
  grid-column: 2;
}
</style>