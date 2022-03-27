import httpClient from "./http";

export async function getContactList(q = "") {
  return (await httpClient.get("/contacts")).data;
}
