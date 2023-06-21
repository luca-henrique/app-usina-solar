import axios from 'axios';

export const dev =
  'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023';

const api = axios.create({baseURL: dev});

api.interceptors.request.use(
  (config: any) => {
    const token = 'HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF';
    const headers = {
      ...config.headers,
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return {
      ...config,
      headers,
    };
  },
  error => {
    console.log(error);
  },
);

export default api;
