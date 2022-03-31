<template>
  <div class="segment-container">
    <sui-segment-group>
      <!-- header -->
      <sui-segment>
        <form-header formName="contact" formType="Add" formColor="teal" />
      </sui-segment>
      <!-- body -->
      <sui-segment>
        <form-body :submitHandler="submitHandler" :contact="this.contact" :edit="false" />
      </sui-segment>
    </sui-segment-group>
  </div>
</template>

<script>
import { addContact } from "../../services/contact.service";

import FormHeader from "../../components/FormHeader.vue";
import FormBody from "../../components/FormBody.vue";

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
    };
  },
  name: "AddContact",
  components: {
    FormHeader,
    FormBody,
  },
  methods: {
    async submitHandler() {
      try {
        const resp = await addContact(this.contact);
        console.log(resp);
        if (resp.code == 11000) {
          //implement unique handle here
          console.err("please enter unique id");
        }
      } catch (err) {
        console.error(err);
      }
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