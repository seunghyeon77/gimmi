import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

// 토큰 갱신
const refreshAccessToken = async () => {
  const res = await customAxios.post(`/auth/reissue`, {
    refreshToken: localStorage.getItem('refreshToken'),
  });
  localStorage.clear();
  if (res) {
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshToken);
  }
  customAxios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    'accessToken',
  )}`;
};

// 토큰 유효성 검사
customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      return customAxios(originalRequest);
    }
    return Promise.reject(error);
  },
);

customAxios.interceptors.request.use(
  (config) => {
    const accessToken: string | null = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default customAxios;
