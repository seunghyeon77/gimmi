import customAxios from '@/utils/cutstomAxios';

export const checkCreation = async () => {
  const res = await customAxios.get('/workspaces/check-creation');
  return res;
};
