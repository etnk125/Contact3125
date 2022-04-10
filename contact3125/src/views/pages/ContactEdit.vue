<template>
  <div class="segment-container">
    <sui-segment-group>
      <!-- header -->
      <sui-segment>
        <form-header formName="Contact" formType="Edit" formColor="teal" />
      </sui-segment>
      <!-- body -->
      <sui-segment>
        <form-body :submitHandler="submitHandler" :contact="this.contact" :edit="true" />
      </sui-segment>
    </sui-segment-group>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { editContact, getContact } from "../../services/contact.service";

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
  components: {
    FormHeader,
    FormBody,
  },
  methods: {
    async submitHandler() {
      try {
        const resp = await editContact(this.contact);
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
  async created() {
    try {
      this.contact = await getContact(useRoute().params.id);
      console.log(this.contact);
    } catch (err) {
      console.log("error occur when get contact by id");
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