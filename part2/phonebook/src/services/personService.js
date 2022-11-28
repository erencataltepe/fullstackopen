import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const addPerson = (person) => {
  return axios.post(baseUrl, person).then((response) => response.data);
};

const removePerson = (id) => {
  console.log(id);
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => console.log(response.data));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, addPerson, removePerson };
