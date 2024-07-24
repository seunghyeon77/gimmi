'use client';

import basicIcon from '@/../public/images/basicIcon.png';
import Image from 'next/image';
import camera from '@/../public/svgs/camera.svg';
import pencil from '@/../public/svgs/workspace/editPencil.svg';
import EditButton from '@/app/(afterLogin)/mypage/_components/EditButton';
import { useRef, useState } from 'react';

import {
  basicProfilImg,
  editNickname,
  myInfo,
  setProfileImg,
} from '@/api/mypage';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { imageLoader } from '@/utils/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { data } = useQuery<any>({
    queryKey: ['myInfo'],
    queryFn: () => myInfo(),
  });
  const router = useRouter();

  const [update, setUpdate] = useState(false);
  const [error, setError] = useState('');
  const [nickname, setNickname] = useState('');
  const [imgFile, setImgFile] = useState<File>();
  const [imgPath, setImgPath] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);
  const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2;

  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];
      setImgFile(img);
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setImgPath(reader.result as string);
      };
    }
    setUpdate(true);
  };

  console.log(data);

  const handleUpdate = async () => {
    // 이미지 전송
    const formData = new FormData();
    if (imgFile) {
      formData.append('profileImage', imgFile);
    }

    // 업데이트 하는 로직 구현
    try {
      if (imgFile) {
        const resImage = await setProfileImg(formData);
        console.log(resImage);
        if (resImage.status === 200) {
          location.reload();
          setUpdate(false);
        }
      }
      if (nickname !== '') {
        const res = await editNickname(nickname);
        console.log(res);
        if (res.status === 200) {
          setError('');
          location.reload();
          setUpdate(false);
          setNickname('');
        }
      }
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  const handleDefaultImage = async () => {
    const res = await basicProfilImg();
    if (res.status === 200) {
      location.reload();
    }
  };

  console.log(imgFile);
  console.log(update);

  return (
    <div>
      <div className="px-5">
        <div className="flex flex-col justify-center items-center text-[#4B5563] mb-14">
          <div className="w-24 h-24 mb-5 relative">
            {imgPath ? (
              <Image
                className="rounded-full"
                src={imgPath}
                alt="profil-image"
                layout="fill"
              />
            ) : data?.data.profileImage === 'default.png' ? (
              <Image
                src={basicIcon}
                alt="profil-image"
                width={120}
                height={120}
              />
            ) : (
              <Image
                className="rounded-full"
                src={data?.data.profileImage}
                alt="profil-image"
                layout="fill"
                loader={() => imageLoader(data?.data.profileImage)}
              />
            )}

            <div className="w-8 h-8 bg-[#DBEAFE] rounded-full absolute right-0 -bottom-1 flex justify-center items-center">
              <label htmlFor="photo">
                <Image src={camera} alt="camera" />
              </label>

              <input
                className="hidden"
                id="photo"
                type="file"
                accept=".png, .jpeg, .jpg"
                ref={imgRef}
                onChange={previewImage}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-3">닉네임</h3>
          <form className="relative">
            <input
              className="w-full h-12 bg-[#F9FAFB] rounded-lg pl-2"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder={data?.data.nickname}
            />
            <div
              className="absolute right-3 bottom-4 cursor-pointer"
              onClick={() => setUpdate(true)}
            >
              <Image src={pencil} alt="edit-pencil" />
            </div>
          </form>
          <span className="text-[10px] text-[#EF4444] pl-3">{error}</span>
        </div>
      </div>
      {/* 수정하기 버튼 & 기본 이미지 변경 버튼 조건문 처리 */}
      {update && (
        <div onClick={handleUpdate}>
          <EditButton>수정하기</EditButton>
        </div>
      )}
      {data?.data.profileImage !== 'default.png' && update === false && (
        <div onClick={handleDefaultImage}>
          <EditButton>기본 이미지로 변경</EditButton>
        </div>
      )}
    </div>
  );
}
