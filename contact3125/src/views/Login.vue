<template>
  <!-- <sui-message v-if="errorMessage" negative>
    <sui-icon name="close" @click="errorMessage=false" />
    <sui-message-header>something went wrong</sui-message-header>
  </sui-message>
  <sui-message v-if="matchMessage" negative>
    <sui-icon name="close" @click="matchMessage=false" />
    <sui-message-header>username or password are not match</sui-message-header>
  </sui-message>-->

  <!-- main content -->
  <main>
    <sui-segment class="login-container" stacked>
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
          <input required type="password" placeholder="Password" v-model="user.password" />
        </div>

        <sui-button>
          <sui-icon name="spinner" loading v-if="loading" />
          <span>Login</span>
        </sui-button>
      </sui-form>
    </sui-segment>
  </main>
</template>

<script>
import { login } from "../services/user.service";
import store from "../store";
export default {
  data() {
    return {
      errorMessage: false,
      matchMessage: false,
      loading: false,
      user: { username: "bob", password: "1234" },
    };
  },
  methods: {
    notMatch() {
      // tell user that not match
      store.addMessage("wrong username or password");
      // console.log("wrong username or password");
      this.matchMessage = true;
    },
    errorBound() {
      // tell user that something went wrong
      store.addMessage("something went wrong");
      this.errorMessage = true;
    },
    async submitHandler() {
      this.loading = true;
      try {
        const isMatch = (await login(this.user)).data;
        if (isMatch) {
          this.$router.push({ name: "ContactIndex" });
        } else {
          this.notMatch();
        }
      } catch (err) {
        this.errorBound();
        console.error(err);
      }
      this.loading = false;
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