import Axios from "axios";

export async function getTodos() {
  console.log("fetching todos");
  const todos = await Axios.get("https://jsonplaceholder.typicode.com/todos");
  return todos.data;
}

export async function getUsers() {
  const users = await Axios.get("https://jsonplaceholder.typicode.com/users");
  return users.data;
}

export async function getSpecificUser(id) {
  console.log("fetching user info" + id);
  const user = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return user.data;
}

export async function getUserTodos(id) {
  const user = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  return user.data;
}
