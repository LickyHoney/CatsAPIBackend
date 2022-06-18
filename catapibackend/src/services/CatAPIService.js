import axios from "axios";

const baseUrl = "http://localhost:3020/cats";

// To fetch all cats.
const getAll = () => {
  return axios.get(baseUrl);
};

//To fetch cat by id.
const getCat = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

//To filter cat by name.
const getCatName = (name) => {
  return axios
    .get(`${baseUrl}/${name}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// To add a new cat.
const AddCat = (newObject) => {
  return axios.post(baseUrl, newObject);
};

//To delete a cat
const deleteCat = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  getCat: getCat,
  AddCat: AddCat,
  deleteCat: deleteCat,
  getCatName: getCatName
};
