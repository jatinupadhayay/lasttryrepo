import axios from 'axios';

export const CreateAccount1 = (userData) => {
  return axios.post('http://localhost:8080/api/users', userData);
};
