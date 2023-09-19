export default function userSignUp(userData) {
  fetch("http://localhost:8080/todo/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
