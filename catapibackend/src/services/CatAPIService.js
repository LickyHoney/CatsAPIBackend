import { Sort } from "@material-ui/icons";
import axios from "axios";
const baseUrl = "http://localhost:3020/cats";
const baseSortUrl = "http://localhost:3020/cats?_sort=[name]&_order[DESC]";

let map = Map();

const getAll = () => {
  return axios.get(baseUrl).then((res) => console.log(res));
};

const getCat = (id) => {
  return axios
    .get(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((res) => console.log(res));
};

const getCatSort = (name, DESC) => {
  return axios
    .get(baseSortUrl, { params: { Sort: name, Orde: DESC } })

    .then((res) => console.log(res));
};

const getCatName = (name) => {
  return axios
    .get(`${baseUrl}/${name}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const AddCat = (newObject) => {
  return axios.post(baseUrl, newObject).then((res) => console.log(res));
};

const deleteCat = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((res) => console.log(res));
};

export default {
  getAll: getAll,
  getCat: getCat,
  AddCat: AddCat,
  deleteCat: deleteCat,
  getCatName: getCatName,
  getCatSort: getCatSort
};
