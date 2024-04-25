import axios from "axios";

const baseURL = "http://localhost:3001/contacts";

function getAll() {
  return axios.get(baseURL).then((response) => response.data);
}

function create(newContact) {
  return axios.post(baseURL, newContact).then((response) => response.data);
}

function remove(id) {
  return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
}

function update(id, updatedContact) {
  return axios
    .put(`${baseURL}/${id}`, updatedContact)
    .then((response) => response.data);
}

export default {
  getAll,
  create,
  remove,
  update,
};
