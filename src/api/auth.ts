import customAxios from '@/utils/cutstomAxios';

type TSignup = {
  loginId: string;
  nickname: string;
  email: string;
  password: string;
};

export const postSignup = async (data: TSignup) => {
  const response = await customAxios.post('/auth/join', data);
  return response;
};

export const logout = async () => {
  const res = await customAxios.post('/auth/goodbye');
  console.log(res);

  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.reload();
};

export const withdraw = async (password: string) => {
  const res = await customAxios.delete('/auth/cuage', {
    data: { password },
  });
  if (res.status === 200) {
    await logout();
  }
  return res;
};
