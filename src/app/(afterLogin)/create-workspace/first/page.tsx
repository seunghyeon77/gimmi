'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { useWorkSpaceStore } from '@/hooks/useWorkSpaceStore';
import { useEffect, useState } from 'react';
import { verlifyDuplication } from '@/api/duplication';
import { duplicationType } from '@/constants/duplication';
import { AxiosError } from 'axios';

export default function Page() {
  const { groupMaker, add1Page } = useWorkSpaceStore();

  const [name, setName] = useState(groupMaker.name);
  const [headCount, setHeadCount] = useState(groupMaker.headCount);

  const [error, setError] = useState('');
  const [nameCheck, setNameCheck] = useState(false);

  const handleNext = () => {
    add1Page({ name, headCount });
  };
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // api 검사 마치면 && nameCheck 넣어주기
    if (name.length > 1 && (headCount as number) > 1 && nameCheck) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, headCount, nameCheck]);

  const duplicateGroupName = async (type: string) => {
    try {
      const res = await verlifyDuplication({
        type,
        value: name,
      });
      console.log(res);
      if (!res.data.duplication) {
        setError('');
        setNameCheck(true);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
      console.error(error);
    }
  };

  return (
    <>
      <Progress value={33} className="h-[1px] mb-9" />
      <div className="grid w-full max-w-sm items-center mb-11">
        <Label
          htmlFor="name"
          className="text-xs text-[#6B7280] font-normal mb-2"
        >
          1.그룹 이름을 정해주세요!
        </Label>
        <div className="flex justify-between items-center">
          <Input
            autoFocus
            required
            maxLength={9}
            type="text"
            id="name"
            placeholder="최대 9자"
            className="w-56 h-[52px] bg-[#F9FAFB] placeholder:text-base placeholder:text-[#D1D5DB] mr-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="text-xs text-[#D1D5DB]">{`${name.length}/9`}</span>
          <Button
            className="w-[93px] h-[52px] bg-[#D1D5DB] text-[#6B7280] text-xs"
            onClick={() => duplicateGroupName(duplicationType.workspaceName)}
          >
            중복확인
          </Button>
        </div>
        {error !== '' ? (
          <span className="text-red-500 text-xs mt-1">{error}</span>
        ) : null}
      </div>

      <div className="grid w-full max-w-sm items-center">
        <Label
          htmlFor="groupNum"
          className="text-xs text-[#6B7280] font-normal mb-2"
        >
          2. 그룹 인원수를 설정하세요!
        </Label>
        <div className="flex items-center">
          <Input
            autoFocus
            required
            type="number"
            id="groupNum"
            placeholder="최소 2명 ~ 최대 9명"
            className="w-56 h-[52px] bg-[#F9FAFB] placeholder:text-base placeholder:text-[#D1D5DB] mr-1"
            value={headCount}
            onChange={(e) => setHeadCount(e.currentTarget.valueAsNumber)}
          />
        </div>
      </div>
      <Link href={'/create-workspace/second'}>
        <div
          onClick={handleNext}
          className="w-full flex justify-center items-center"
        >
          <button
            disabled={disabled}
            className="fixed bottom-10 w-11/12 h-11 bg-[#DBEAFE] rounded-lg text-base text-[#6B7280]"
          >
            계속하기
          </button>
        </div>
      </Link>
    </>
  );
}
