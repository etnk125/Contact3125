import httpClient from "./http";

export async function getContactList(q = "") {
  return (await httpClient.get("/contacts")).data;
}

export async function addContact(contact = {}) {
  return (await httpClient.post("/contacts", contact)).data;
}
export async function editContact(contact = {}) {
  return (await httpClient.post("/contacts/" + contact.cid || "", contact))
    .data;
}

export async function getContact(id = "") {
  return (await httpClient.get("/contacts/" + id)).data;
}

export async function deleteContact(id = "") {
  console.log("delete");
  return (await httpClient.delete("/contacts/" + id)).data;
}
