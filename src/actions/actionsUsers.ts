import axios from "axios";
const API_URL = 'http://localhost:3000/api/users/';
export async function getUsers() {
    const response = await axios.get(API_URL);
    return response.data;
}

export async function createUser(email: string, name: string) {
    const response = await axios.post(API_URL, { email, name });
    return response.data;
}
