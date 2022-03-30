<template>
  <div class="segment-container">
    <sui-segment-group>
      <sui-segment>
        <sui-header as="h2">
          Contact
          <sui-label color="teal">Add</sui-label>
        </sui-header>
      </sui-segment>
      <sui-segment>
        <!-- form -->
        <sui-form @submit.prevent="submitHandler">
          <div class="required field">
            <label>Contact ID</label>
            <input required type="text" placeholder="Contact ID" v-model="contact.cid" />
          </div>
          <div class="required field">
            <label>First Name</label>
            <input required type="text" placeholder="First Name" v-model="contact.firstname" />
          </div>
          <div class="required field">
            <label>Last Name</label>
            <input required type="text" placeholder="Last Name" v-model="contact.lastname" />
          </div>
          <div class="required field">
            <label>Mobile No</label>
            <input required type="text" placeholder="Mobile No" v-model="contact.mobile" />
          </div>
          <div class="field">
            <label>Email</label>
            <input type="text" placeholder="Email" v-model="contact.email" />
          </div>
          <div class="field">
            <label>Facebook</label>
            <input type="text" placeholder="Facebook" v-model="contact.facebook" />
          </div>
          <div class="field">
            <label>Image Url</label>
            <input type="text" placeholder="Image Url" v-model="contact.imageUrl" />
          </div>

          <sui-button>Add</sui-button>
        </sui-form>
      </sui-segment>
    </sui-segment-group>
  </div>
</template>

<script>
// import Navbar from "../components/Navbar.vue";
import { addContact } from "../../services/contact.service";

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
    // Navbar,
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