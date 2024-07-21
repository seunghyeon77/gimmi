import customAxios from '@/utils/cutstomAxios';

const myInfo = async () => {
  const res = customAxios.get('/my');
  return res;
};

const editNickname = async (nickname: string) => {
  const res = await customAxios.put('/my/nickname/edit', nickname);
  return res;
};

const setProfileImg = async (profileImage: any) => {
  //multi part로 보내기
  const res = await customAxios.put('/my/profile-image', profileImage);
  return res;
};

const basicProfilImg = async (profileImageId: number) => {
  const res = await customAxios.delete(`/my/profile-image/${profileImageId}'`);
  return res;
};

export { myInfo, editNickname, setProfileImg, basicProfilImg };
