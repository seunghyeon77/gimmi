'use client';

import Image from 'next/image';
import backArrow from '@/../public/svgs/backArrow.svg';
import home from '@/../public/svgs/home.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TopBar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center pb-11">
      <div onClick={() => router.back()}>
        <Image src={backArrow} alt="backArrow" />
      </div>

      <Link href={'/'}>
        <Image src={home} alt="home" className="w-[22px]" />
      </Link>
    </div>
  );
}
