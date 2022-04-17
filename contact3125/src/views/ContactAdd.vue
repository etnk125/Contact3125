<template>
  <div class="segment-container">
    <sui-segment-group>
      <!-- header -->
      <sui-segment>
        <form-header formName="Contact" formType="Add" formColor="teal" />
      </sui-segment>
      <!-- body -->
      <sui-segment>
        <form-body
          :submitHandler="submitHandler"
          :contact="this.contact"
          :edit="false"
          :dimmed="saved"
          :onClose="()=>{saved=false}"
        />
      </sui-segment>
    </sui-segment-group>
  </div>
</template>

<script>
import { addContact } from "../services/contact.service";

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
        const resp = await addContact(this.contact);

        if (resp.code == 11000) {
          // this id already taken
          store.addMessage("please enter unique id");
          console.error("please enter unique id");
          return;
        }
      } catch (err) {
        store.addMessage("something went wrong");
        console.error(err);
        return;
      }
      this.saved = true;
    },
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