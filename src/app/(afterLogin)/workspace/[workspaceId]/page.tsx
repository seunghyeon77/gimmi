import backArrow from '@/../public/svgs/backArrow.svg';
import closedMail from '@/../public/svgs/closedMail.svg';
import Image from 'next/image';

// 이 페이지 들어왔을때 useQuery로 방 정보 가져오기

export default function Page() {
  return (
    <div>
      <div className="mb-5">
        <Image src={backArrow} alt="backArrow" />
      </div>
      <div className="flex items-end">
        <h1 className="font-galmuri text-3xl">지미네 그룹</h1>
        <div>
          <Image src={closedMail} alt="closedMail" />
        </div>
      </div>
    </div>
  );
}
