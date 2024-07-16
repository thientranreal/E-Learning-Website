import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/user";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const loginUser = (user) => axios.post("/login", user);

export const createUser = (user) => axios.post("/create", user);
