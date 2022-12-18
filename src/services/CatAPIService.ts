import axios from "axios";

import http  from "../http-common";
import ICat from "../Cat";


// const baseUrl = "http://localhost:3020/cats";

// To fetch all cats.
const getAll = () => {
  return http.get<Array<ICat>>("/");
};

//To fetch cat by id.
const getCat = (id: any) => {
  return http.get<ICat>(`/${id}`);
};

//To filter cat by name.
const getCatName = (name: string) => {
  return http
    .get<Array<ICat>>(`/${name}`)
    .then(response => console.log(response))
    .then((json: any) => console.log(json));
};

// To add a new cat.
const AddCat = (newObject: any) => {
  return http.post<ICat>("/", newObject);
};

//To delete a cat
const deleteCat = (id: any) => {
  return http.delete<ICat>(`/${id}`);
};

export default {
  getAll: getAll,
  getCat: getCat,
  AddCat: AddCat,
  deleteCat: deleteCat,
  getCatName: getCatName
};
