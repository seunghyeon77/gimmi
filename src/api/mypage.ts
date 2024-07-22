import customAxios from '@/utils/cutstomAxios';

const myInfo = async () => {
  const res = await customAxios.get('/my');

  return res;
};

const editNickname = async (nickname: string) => {
  const res = await customAxios.put('/my/nickname/edit', { nickname });
  return res;
};

const setProfileImg = async (formData: any) => {
  //multi part로 보내기
  const res = await customAxios.put('/my/profile-image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

const basicProfilImg = async () => {
  const res = await customAxios.delete(`/my/profile-image`);
  return res;
};

export { myInfo, editNickname, setProfileImg, basicProfilImg };
