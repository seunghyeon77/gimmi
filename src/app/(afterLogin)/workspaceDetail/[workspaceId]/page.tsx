'use client';

import { detailUpdate, detailWorkspace } from '@/api/workspace';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import editPencil from '@/../public/svgs/workspace/editPencil.svg';
import { AxiosError } from 'axios';
import BackArrow from '../../_components/BackArrow';

export default function Page() {
  const { workspaceId } = useParams();
  const router = useRouter();

  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const [isCreator, setIsCreator] = useState(true);

  const [error, setError] = useState('');

  const [update, setUpdate] = useState(false);

  const { data } = useQuery({
    queryKey: ['workspaceDetail', workspaceId],
    queryFn: () => detailWorkspace(Number(workspaceId)),
  });

  useEffect(() => {
    if (data) {
      setDescription(data.data.description || '');
      setTag(data.data.tag || '');
      setIsCreator(data.data.isCreator);
    }
  }, [data]);

  const handleUpdate = async () => {
    const data = { tag, description };
    try {
      const res = await detailUpdate({ workspaceId, data });
      console.log(res);
      setError('');
      if (res.status === 200) {
        setUpdate(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className="px-6 py-12 h-screen">
      <BackArrow />
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <div className="mb-9">
            <h1 className="text-xl mb-5">워크스페이스 비밀번호 확인</h1>
            <div className="w-24 h-12 rounded-lg bg-[#F9FAFB] flex justify-center items-center">
              <span>{data?.data.password}</span>
            </div>
          </div>
          <div className="mb-9 relative">
            <label htmlFor="description" className="text-xl">
              그룹 설명
            </label>
            <textarea
              disabled={!isCreator}
              id="description"
              placeholder="그룹 설명을 추가해주세요!"
              className="w-full bg-[#F9FAFB] rounded-lg p-3 mt-5 h-12 placeholder:text-xs placeholder:pt-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {isCreator && (
              <div
                className="absolute right-3 top-16"
                onClick={() => setUpdate((v) => !v)}
              >
                <Image src={editPencil} alt="edit" />
              </div>
            )}
          </div>
          <div className="relative">
            <label htmlFor="description" className="text-xl">
              그룹 태그
            </label>
            <textarea
              disabled={!isCreator}
              id="tag"
              placeholder="그룹 태그를 추가해주세요!"
              className="w-full h-12 bg-[#F9FAFB] rounded-lg p-3 mt-5 placeholder:text-xs placeholder:pt-1"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            ></textarea>
            {isCreator && (
              <div
                className="absolute right-3 top-16"
                onClick={() => setUpdate((v) => !v)}
              >
                <Image src={editPencil} alt="edit" />
              </div>
            )}
          </div>
        </div>
        {error !== '' ? (
          <span className="text-red-500 text-xs">{error}</span>
        ) : null}

        {isCreator && update && (
          <div className="w-full flex justify-center items-center bg-main rounded-lg py-3 mb-10">
            <button className="text-white text-base" onClick={handleUpdate}>
              수정 완료하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
