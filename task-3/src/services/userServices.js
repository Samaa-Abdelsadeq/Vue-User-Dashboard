import axios from "axios";

const API = "http://localhost:3000/users";

export const getAllUsers = () => axios.get(API);

export const deleteUser = (id) => axios.delete(`${API}/${id}`);

export const getUserById = (id) => axios.get(`${API}/${id}`);

export const addUser= (user) => axios.post(API, user);

export const updateUser=(id,user)=>axios.put(`${API}/${id}`,user);