'use client';

import basicIcon from '@/../public/images/basicIcon.png';
import Image from 'next/image';
import camera from '@/../public/svgs/camera.svg';
import pencil from '@/../public/svgs/workspace/editPencil.svg';
import EditButton from '@/app/(afterLogin)/mypage/_components/EditButton';
import { useRef, useState } from 'react';

export default function Page() {
  const [nickname, setNickname] = useState('');
  const [update, setUpdate] = useState(false);

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
  };

  const handleUpdate = () => {
    //업데이트 하는 로직 구현
  };

  return (
    <div>
      <div className="px-5">
        <div className="flex flex-col justify-center items-center text-[#4B5563] mb-14">
          <div className="w-24 mb-5 relative">
            <Image
              src={imgPath ? imgPath : basicIcon}
              alt="profil-image"
              width={imgPath ? 100 : undefined}
              height={imgPath ? 100 : undefined}
            />

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
            <input className="w-full h-12 bg-[#F9FAFB] rounded-lg" />
            <div
              className="absolute right-3 bottom-4"
              onClick={() => setUpdate((v) => !v)}
            >
              <Image src={pencil} alt="edit-pencil" />
            </div>
          </form>
        </div>
      </div>
      <div className={`${update ? null : 'hidden'}`} onClick={handleUpdate}>
        <EditButton>수정하기</EditButton>
      </div>
    </div>
  );
}
