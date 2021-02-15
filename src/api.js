import axios from 'axios';

export default axios.create({
  baseURL: `https://api.github.com/`,
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer 1fca25cb5f87a37b4bd53a2561cb40e67ae22dc4",
  }
});
