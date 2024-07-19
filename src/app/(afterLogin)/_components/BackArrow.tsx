'use client';

import backArrow from '@/../public/svgs/backArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BackArrow() {
  const router = useRouter();
  return (
    <div className="mb-5" onClick={() => router.back()}>
      <Image src={backArrow} alt="backArrow" />
    </div>
  );
}
