<template>
  <Navbar headerText="Contacts" />
  <sui-segment>
    <SearchForm />
  </sui-segment>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SearchForm from "../views/SearchForm.vue";

export default {
  components: {
    Navbar,
    SearchForm,
  },
};
</script>

<style>
</style>