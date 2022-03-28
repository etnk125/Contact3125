import httpClient from "./http";

export async function getContactList(q = "") {
  return (await httpClient.get("/contacts")).data;
}

export async function addContact(contact) {
  return (await httpClient.post("/contacts", contact)).data;
}
