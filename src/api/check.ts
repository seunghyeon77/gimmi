import customAxios from '@/utils/cutstomAxios';

export const checkCreation = async () => {
  const res = await customAxios.get('/workspaces/check-creation');
  return res;
};

export const feedBack = async (content: string) => {
  const res = await customAxios.post('/feedback', { content });
  return res;
};
