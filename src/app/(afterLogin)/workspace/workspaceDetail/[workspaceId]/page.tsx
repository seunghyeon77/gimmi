'use client';

import { detailWorkspace } from '@/api/workspace';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const { workspaceId } = useParams();

  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const { data } = useQuery({
    queryKey: ['workspaceDetail', workspaceId],
    queryFn: () => detailWorkspace(Number(workspaceId)),
  });

  useEffect(() => {
    if (data) {
      setDescription(data.data.description || '');
      setTag(data.data.tag || '');
    }
  }, [data]);

  return (
    <div className="relative">
      <div>
        <div className="mb-9">
          <h1 className="text-xl mb-5">워크스페이스 비밀번호 확인</h1>
          <div className="w-24 h-12 rounded-lg bg-[#F9FAFB] flex justify-center items-center">
            <span>{data?.data.password}</span>
          </div>
        </div>
        <div className="mb-9">
          <label htmlFor="description" className="text-xl">
            그룹 설명
          </label>
          <textarea
            id="description"
            placeholder="그룹 설명을 추가해주세요!"
            className="w-full bg-[#F9FAFB] rounded-lg p-3 mt-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="text-xl">
            그룹 태그
          </label>
          <textarea
            id="tag"
            placeholder="그룹 태그를 추가해주세요!"
            className="w-full h-12 bg-[#F9FAFB] rounded-lg p-3 mt-5"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-[#EFF6FF] rounded-lg py-4 absolute -bottom-80">
        <button className="text-[#6B7280] text-base ">
          그룹설명, 그룹태그 수정하기
        </button>
      </div>
    </div>
  );
}
