import { reactive } from "vue";

// error bound
const store = reactive({
  currentID: 0,
  errMessages: [{ ID: 0, message: "this is err" }],
  addMessage(message = "something went wrong") {
    this.errMessages = [...this.errMessages, { message, ID: ++this.currentID }];
  },
  removeMessage(ID) {
    this.errMessages = this.errMessages.filter((message) => message.ID != ID);
  },
  clearMessage() {
    this.errMessages = [];
  },
});

export default store;
