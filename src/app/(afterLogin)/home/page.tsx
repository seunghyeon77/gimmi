import Image from 'next/image';
import MainCarousel from '../_components/MainCarousel';
import rightArrow from '@/../public/svgs/nextArrow.svg';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-16 px-6 h-max bg-[#071642]">
      <h1 className="font-galmuri text-3xl pb-3 text-white">GYMMI</h1>
      <h5 className="text-xs mb-6 text-white">
        지미와 함께 운동의욕을 채워보세요!
      </h5>
      <div className="w-full h-96 bg-white rounded-2xl mb-5">
        <div className="ml-5 pt-4 mb-8 flex items-center justify-between">
          <Link href={'/workspace-list/mygroup'}>
            <span className="text-base">Group pages</span>
          </Link>
          <Link href={'/workspace-list/mygroup'}>
            <div className="h-5 w-5 mr-4 mt-2">
              <Image src={rightArrow} alt="arrow" />
            </div>
          </Link>
        </div>
        <MainCarousel />
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-[#EFF6FF] rounded-2xl w-screen h-52"></div>
        <div className="w-5 bg-[#071642] h-52"></div>
        <div className="bg-[#EFF6FF] rounded-2xl w-screen h-52"></div>
      </div>
    </div>
  );
}
