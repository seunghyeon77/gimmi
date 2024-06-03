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
