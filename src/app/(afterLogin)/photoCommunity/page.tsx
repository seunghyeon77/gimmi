import photoING from '@/../public/svgs/photoCommunity/photoING.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center mb-6">
          <Image src={photoING} alt="photo-ing" />
        </div>
        <h3 className="text-center text-[#9CA3AF]">
          사진 커뮤니티 준비 중입니다.
        </h3>
      </div>

      <div className="absolute w-full bottom-10 px-5">
        <Link href={'/'}>
          <div className="bg-main text-white text-center py-4 rounded-lg">
            홈으로 돌아가기
          </div>{' '}
        </Link>
      </div>
    </div>
  );
}
