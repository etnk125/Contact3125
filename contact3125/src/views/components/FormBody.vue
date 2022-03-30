<template>
  <sui-form @submit.prevent="submitHandler">
    <!-- required -->

    <div class="required field">
      <label>Contact ID</label>

      <input
        v-if="edit"
        disable
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
      <input required type="text" placeholder="Mobile No" v-model="contact.mobile" />
    </div>

    <!-- non require -->

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

    <sui-button>{{edit?"Save":'Add'}}</sui-button>
  </sui-form>
</template>

<script>
export default {
  props: {
    submitHandler: Function,
    contact: Object,
    edit: false,
  },
};
</script>

<style>
</style>