import axios from 'axios';

// Create an instance of Axios with baseURL
export const api = axios.create({
  baseURL: 'https://condemned-attention-production.up.railway.app',
});