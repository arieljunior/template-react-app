import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:3004/",
});

export default http;