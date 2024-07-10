import noGroup from '@/../public/svgs/noGroup.svg';
import Image from 'next/image';

export default function NoGroup() {
  return (
    <div className="flex flex-col justify-center items-center h-3/4">
      <div className="flex justify-center items-center mb-7">
        <Image src={noGroup} alt="no-image" />
      </div>
      <h3 className="text-center text-xs text-[#9CA3AF]">
        진행 중인 그룹이 없어요.
      </h3>
      <h3 className="text-center text-xs text-[#9CA3AF]">
        그룹을 만들어 운동 의욕을 채워보세요.
      </h3>
    </div>
  );
}
