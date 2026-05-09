import axios from 'axios';
import { Platform } from 'react-native';

// API entry point - https://dummyjson.com/
export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'App-OS': Platform.OS,
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    const message =
      error?.response?.data?.message ||
      error.message ||
      'An error occurred while processing your request. Please try again later.';

    return Promise.reject(new Error(message));
  },
);
