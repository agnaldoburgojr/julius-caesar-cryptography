import axios from "axios";

const baseURL = "https://api.codenation.dev/v1/challenge/dev-ps/";
const api = axios.create({ baseURL });

export default api;
