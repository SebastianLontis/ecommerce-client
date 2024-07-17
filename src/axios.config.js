import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-url/api', 
});

export default instance;
