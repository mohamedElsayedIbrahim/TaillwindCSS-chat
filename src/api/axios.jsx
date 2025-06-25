import axios from "axios";

const instanceAxios = axios.create({
  // baseURL: 'https://api.olxforex.com/api/private-channel/',
  baseURL: 'http://127.0.0.1:8000/api/private-channel/',
  // timeout: 7200,
  // withCredentials:true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Accept-Language':'en'
  }
});

export default instanceAxios;
