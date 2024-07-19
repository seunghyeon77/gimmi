import Image from 'next/image';
import Link from 'next/link';
import noCreate from '@/../public/svgs/noCreate.svg';

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-10">
        <div className="flex justify-center items-center mb-2">
          <Image src={noCreate} alt="gymmi" />
        </div>
        <h3 className="text-center text-[#EF4444]">앗!</h3>
        <h3 className="text-center text-[#EF4444]">
          그룹은 5개까지 참여가능해요.
        </h3>
        <h3 className="text-center text-[#9CA3AF]">
          참여중인 그룹을 달성한 뒤
        </h3>
        <h3 className="text-center text-[#9CA3AF]">참여해주세요!</h3>
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
