'use client';

import Image from 'next/image';
import completeImage from '@/../public/svgs/completeImage.svg';
import x from '@/../public/svgs/x.svg';
import blackX from '@/../public/svgs/blackX.svg';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { completeWorkspace } from '@/api/workspace';
import { useState } from 'react';
import ConfettiButton3 from '../_components/ConfettiButton';

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { workspaceId } = useParams();
  const { data } = useQuery({
    queryKey: ['complete', workspaceId],
    queryFn: () => completeWorkspace(Number(workspaceId)),
  });

  const handleOpen = () => {
    setOpen((v) => !v);
  };

  return (
    <div
      className={`w-full h-screen px-5 py-11 ${
        open ? 'bg-[#EFF6FF]' : 'bg-[#60A5FA]'
      }`}
    >
      <div className="mb-16" onClick={() => router.back()}>
        {open ? (
          <Image src={blackX} alt="black-x" />
        ) : (
          <Image src={x} alt="x" />
        )}
      </div>
      <div
        className={`flex flex-col justify-center items-center mb-11 ${
          open ? 'text-black' : 'text-white'
        }`}
      >
        <h1 className="font-galmuri text-[26px]">워크스페이스 목표를</h1>
        <h1 className="font-galmuri text-[26px] mb-5">모두 달성했어요!</h1>
        <h6 className="text-xs">당첨된 테스크를 확인 후 팀원들과</h6>
        <h6 className="text-xs">함께 테스크를 수행해보세요</h6>
      </div>
      <div className="flex flex-col justify-between items-center mb-8">
        <div
          className={`w-40 h-60 rounded-2xl flex justify-center items-center shadow-box-shadow mb-4 cursor-pointer ${
            !open
              ? 'animate-bounce bg-[#DBEAFE]'
              : 'animate-flip-right bg-[#60A5FA]'
          } `}
          onClick={handleOpen}
        >
          {open ? (
            <div className="text-white w-24 h-24 text-base text-center overflow-y-scroll">
              {data?.data.pickedTask.task}
            </div>
          ) : (
            <Image src={completeImage} alt="complete-card" />
          )}
        </div>
        <span
          className={`text-[#fff] text-[10px] text-center ${
            open && 'invisible'
          }`}
        >
          카드를 눌러 테스크를 확인하세요
        </span>
      </div>
      <div className={`px-9 ${!open && 'invisible'}`}>
        <span className="text-[10px] text-[#9CA3AF]">미당첨된 테스크</span>
        <div className="text-xs mt-5">
          {data?.data.tasks.map((item: any) => {
            return (
              <h6 className="mb-2.5" key={item.id}>
                {item.task}
              </h6>
            );
          })}
        </div>
      </div>
      {open && <ConfettiButton3 />}
    </div>
  );
}
