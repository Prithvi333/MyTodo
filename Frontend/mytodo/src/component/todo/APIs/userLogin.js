export default async function userLogin(credentials) {
  const { username, password } = credentials;
  console.log(username + " " + password);
  const data = await fetch("http://localhost:8080/todo/signin", {
    headers: {
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  });
  return data;
}
