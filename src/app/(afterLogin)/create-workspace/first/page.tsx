'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { useWorkSpaceStore } from '@/hooks/useWorkSpaceStore';
import { useState } from 'react';

export default function Page() {
  const { groupMaker, add1Page } = useWorkSpaceStore();

  const [name, setName] = useState(groupMaker.name);
  const [headCount, setHeadCount] = useState(groupMaker.headCount);

  const handleClick = () => {
    add1Page({ name, headCount });
  };

  console.log(groupMaker);
  return (
    <>
      <Progress value={33} className="h-[1px] mb-9" />
      <div className="grid w-full max-w-sm items-center mb-11">
        <Label htmlFor="id" className="text-xs text-[#6B7280] font-normal mb-2">
          1.그룹 이름을 정해주세요!
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="id"
            placeholder="최대 9자"
            className="w-56 h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button className="w-24 h-[52px] bg-[#D1D5DB] text-[#6B7280]">
            중복확인
          </Button>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="id" className="text-xs text-[#6B7280] font-normal mb-2">
          2. 그룹 인원수를 설정하세요!
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="id"
            placeholder="최소 2명 ~ 최대 9명"
            className="w-56 h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
            value={headCount}
            onChange={(e) => setHeadCount(e.target.value)}
          />
        </div>
      </div>
      <Link href={'/create-workspace/second'}>
        <div
          onClick={handleClick}
          className="w-full flex justify-center items-center"
        >
          <button className="fixed bottom-10 w-11/12 h-11 bg-[#DBEAFE] rounded-lg text-base text-[#6B7280]">
            계속하기
          </button>
        </div>
      </Link>
    </>
  );
}
