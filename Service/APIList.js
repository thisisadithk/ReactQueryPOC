import Axios from 'axios';

export async function getTodos() {
    const todos = await Axios.get("https://jsonplaceholder.typicode.com/todos");
    return todos.data;
}

export async function getUsers() {
    const users = await Axios.get("https://jsonplaceholder.typicode.com/users");
    return users.data;
}
