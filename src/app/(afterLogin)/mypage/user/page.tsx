'use client';

import basicIcon from '@/../public/images/basicIcon.png';
import Image from 'next/image';
import NavBar from '../../_components/NavBar';
import NoFeed from '../_components/NoFeed';
import settings from '@/../public/svgs/workspace/settings.svg';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { myInfo } from '@/api/mypage';

type MyInfo = {
  nickname: string;
  loginId: string;
  profileImage: string;
  email: string;
};

export default function Page() {
  const { data } = useQuery<{ data: any }>({
    queryKey: ['myInfo'],
    queryFn: () => myInfo(),
  });

  const imageLoader = () => {
    return `https://gymmi.rmap.store/profile-image/default.png`;
  };

  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="px-5 w-full">
        <Link href={'/mypage/user/settings'}>
          <div className="absolute right-5 top-12">
            <Image src={settings} alt="settings" />
          </div>
        </Link>

        <div className="flex flex-col justify-center items-center text-[#4B5563] mb-8">
          <div className="w-24 mb-5">
            {data?.data.profileImage === 'default.png' ? (
              <Image
                src={basicIcon}
                alt="profil-image"
                width={120}
                height={120}
              />
            ) : (
              <Image
                src={data?.data?.profileImage}
                alt="profil-image"
                width={120}
                height={120}
                loader={imageLoader}
              />
            )}
          </div>
          <span className="text-xl">{data?.data.nickname}</span>
          <span>{`@${data?.data.loginId}`}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <Link href={'/mypage/user/profile'}>
            <div>
              <button className="px-14 py-4 bg-[#F9FAFB] rounded-lg text-xs">
                프로필 편집
              </button>
            </div>
          </Link>

          <div>
            <button className="px-14 py-4 bg-[#F9FAFB] rounded-lg text-xs">
              피드 편집
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-center bg-[#F3F8FF] h-screen max-h-96">
        <NoFeed />
      </div>

      <NavBar />
    </div>
  );
}
