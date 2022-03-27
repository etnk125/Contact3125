import httpClient from "./http";

export async function login(user) {
  return await httpClient.post("/login", user);
}
