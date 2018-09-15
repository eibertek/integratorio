/**
 * vamos a usar tres servicios del backend:
 *  getDatos GET
 *   registrar POST
 *   login POST
 */
import axios from 'axios';

export const loginRequest = (username, password ) => {
  return axios.post('http://localhost:3002/API/users/login',{ username, password });
}
