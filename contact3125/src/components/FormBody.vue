<template>
  <sui-form @submit.prevent="formHandler">
    <!-- required -->

    <div class="required field">
      <label>
        Contact ID
        <sui-label color="red" size="mini">ID must be unique</sui-label>
      </label>

      <input
        v-if="edit"
        disabled
        required
        type="text"
        placeholder="Contact ID"
        v-model="contact.cid"
      />
      <input v-else required type="text" placeholder="Contact ID" v-model="contact.cid" />
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
      <input
        required
        type="tel"
        pattern="[+]{0,1}[0-9]{10,15}"
        placeholder="e.g. +66912345678 or 0912345678"
        v-model="contact.mobile"
      />
    </div>

    <!-- non require -->

    <div class="field">
      <label>Email</label>
      <input type="email" placeholder="e.g. bob@example.com" v-model="contact.email" />
    </div>
    <div class="field">
      <label>Facebook</label>
      <input type="url" placeholder="Facebook URL" v-model="contact.facebook" />
    </div>
    <div class="field">
      <label>Image Url</label>
      <input type="url" placeholder="Image Url" v-model="contact.imageUrl" />
    </div>
    <sui-button-group>
      <sui-button basic color="blue">
        <sui-icon v-if="loading" name="spinner" loading />
        <sui-icon v-else :name="edit?'save':'add'" />
        {{edit?"Save":'Add'}}
      </sui-button>
      <router-link to="/contact">
        <sui-button basic color="blue" id="close-button">
          <sui-icon color="red" name="close" />Close
        </sui-button>
      </router-link>
    </sui-button-group>
  </sui-form>
  <div v-if="dimmed">
    <sui-dimmer :active="true" page @click="onClose">
      <sui-header as="h2" icon inverted>
        <sui-icon name="save" />Saved Contact!
        <sui-header-subheader tiny>press to continue</sui-header-subheader>
      </sui-header>
    </sui-dimmer>
  </div>
</template>

<script>
export default {
  data() {
    return { loading: false };
  },
  props: {
    submitHandler: Function,
    contact: Object,
    edit: Boolean,
    dimmed: Boolean,
    onClose: Function,
  },
  methods: {
    async formHandler() {
      this.loading = true;
      await this.submitHandler();
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.buttons {
  max-width: 300px;
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.dimmer:hover {
  cursor: pointer;
}
#close-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>