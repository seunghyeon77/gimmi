'use client';

//svgs
import createGroup from '@/../public/svgs/createGroup.svg';
import group from '@/../public/svgs/group.svg';
import home from '@/../public/svgs/home.svg';
import photoCommunity from '@/../public/svgs/photoCommunity.svg';
import myPage from '@/../public/svgs/myPage.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { logout } from '@/api/auth';

export default function NavBar() {
  const onClick = async () => {
    await logout();
  };
  const router = useRouter();
  return (
    <div className="w-full h-[96px] fixed bottom-0 flex justify-around items-start border-t-2 pt-3 bg-white">
      <div className="flex flex-col items-center">
        <Image src={createGroup} alt="createGroupIcon" className="my-0.5" />
        <span className="text-[6px] ">그룹만들기</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={group} alt="groupIcon" className="my-0.5" />
        <span className="text-[6px] ">그룹홈</span>
      </div>
      <div
        onClick={() => router.push('/home')}
        className="flex flex-col items-center"
      >
        <Image src={home} alt="homeIcon" className="my-0.5" />
        <span className="text-[6px] ">홈</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={photoCommunity}
          alt="photoCommunityIcon"
          className="my-0.5"
        />
        <span className="text-[6px] ">사진커뮤니티</span>
      </div>
      <div className="flex flex-col items-center" onClick={onClick}>
        <Image src={myPage} alt="myPageIcon" className="my-0.5" />
        <span className="text-[6px] ">마이페이지</span>
      </div>
    </div>
  );
}
