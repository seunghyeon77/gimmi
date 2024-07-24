'use client';

import { feedBack } from '@/api/check';
import BackArrow from '../_components/BackArrow';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const handleSubmit = async () => {
    try {
      const res = await feedBack(value);
      console.log(res);
      if (res.status === 200) {
        router.back();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-6 py-12 h-screen">
      <BackArrow />
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="text-xl mb-4">지미 피드백하기</div>
          <div className="w-full h-16">
            <form>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-[#FEF9C3] py-5 w-full rounded-lg px-3"
                placeholder="지미를 위해 패드백을 남겨주세요!"
              />
            </form>
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-[#EFF6FF] py-4 mb-11"
          onClick={handleSubmit}
        >
          <button className="text-main text-base">피드백 완료</button>
        </div>
      </div>
    </div>
  );
}
