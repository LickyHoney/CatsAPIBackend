import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3020/cats",
  headers: {
    "Content-type": "application/json"
  }
});