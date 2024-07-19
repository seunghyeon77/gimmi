import Image from 'next/image';
import noFeed from '@/../public/svgs/noFeed.svg';

export default function NoFeed() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image src={noFeed} alt="no-feed" />
        </div>
        <span className="text-xs text-[#9CA3AF]">등록한 피드가 없어요.</span>
      </div>
    </div>
  );
}
