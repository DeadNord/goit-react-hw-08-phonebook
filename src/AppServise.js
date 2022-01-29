import axios from 'axios';
axios.defaults.baseURL = 'https://61efbff4732d93001778e582.mockapi.io';

export async function fetchContacts() {
  return axios.get('/contacts').then(response => response.data);
}

export async function addContacts(contacts) {
  return axios.post('/contacts', contacts).then(({ data }) => data);
}

export async function deleteContacts(id) {
  return axios.delete(`/contacts/${id}`);
}
