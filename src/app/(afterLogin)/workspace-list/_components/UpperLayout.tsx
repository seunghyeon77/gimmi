'use client';

import Image from 'next/image';

import backArrow from '@/../public/svgs/whiteBackArrow.svg';
import { useRouter } from 'next/navigation';

export default function UpperLayout() {
  const router = useRouter();
  return (
    <div className="pl-5 pt-14">
      <Image
        src={backArrow}
        alt="backArrow"
        className="w-6 mb-3.5"
        onClick={() => router.back()}
      />
      <h1 className="font-galmuri text-3xl text-[#4B5563] pl-1 pb-1">MY</h1>
      <h1 className="font-galmuri text-3xl text-[#4B5563] pl-1 pb-5">GYMMI</h1>
      <h6 className="text-[#4B5563] text-xs mb-6">
        오늘도 지미와 함께 운동의욕을 채우고 테스크를 달성하세요.
      </h6>
    </div>
  );
}
