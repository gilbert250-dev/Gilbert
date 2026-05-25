import axios from 'axios';

// Using relative URL so Vite's proxy forwards /api → http://localhost:5000/api
// This avoids all CORS issues in development
const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const logout = () => api.post('/logout');
export const getMe = () => api.get('/me');
