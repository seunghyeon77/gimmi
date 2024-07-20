import Image from 'next/image';
import noWorkspace from '@/../public/svgs/workspace/noWorkspace.svg';

export default function NoWorkspace() {
  return (
    <div className="flex flex-col justify-center items-center absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="mb-7">
        <Image src={noWorkspace} alt="no-workspace" />
      </div>
      <div className="text-xs text-[#9CA3AF] text-center">
        <h6>해당 그룹이 없어요.</h6>
        <h6>그룹을 만들어 보세요!</h6>
      </div>
    </div>
  );
}
