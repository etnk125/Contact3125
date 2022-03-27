<template>
  <navbar headerText="Login" />

  <!-- main content -->
  <main>
    <sui-segment class="login-container">
      <!-- heading -->
      <sui-segment color="teal">
        <sui-label ribbon color="teal">Login</sui-label>
      </sui-segment>

      <!-- form -->
      <sui-form @submit.prevent="submitHandler">
        <!-- same as sui-form-field -->
        <div class="required field">
          <label>User Account</label>
          <input required type="text" placeholder="User Account" v-model="user.username" />
        </div>
        <!-- same as sui-form-field -->
        <div class="required field">
          <label>Password</label>
          <!-- change type to password later -->
          <input required type="text" placeholder="Password" v-model="user.password" />
        </div>

        <sui-button>Login</sui-button>
      </sui-form>
    </sui-segment>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { login } from "../services/user.service";

export default {
  data() {
    return { user: { username: "", password: "" } };
  },
  name: "login",
  components: {
    Navbar,
  },
  methods: {
    notMatch() {
      console.log("wrong username or password");
      // tell user that not match
    },
    async submitHandler() {
      try {
        const isMatch = (await login(this.user)).data;
        if (isMatch) {
          this.$router.push({ name: "contact" });
        } else {
          this.notMatch();
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 50ch) 1fr;
}
.login-container {
  margin: 2rem;
  grid-column: 2;
  /* margin: 0 auto;
  width: clamp(20ch, 50%, 30ch); */
}
</style>