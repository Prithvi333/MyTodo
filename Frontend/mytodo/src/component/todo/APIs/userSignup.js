export default async function userSignUp(userData, setError) {
  const addStatus = await fetch("http://localhost:8080/todo/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const userStats = await addStatus.json();

  addStatus.status === 201
    ? setError("Registered successfully!")
    : setError(userStats.errorMessage);
}
