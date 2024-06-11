'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useWorkSpaceStore } from '@/hooks/useWorkSpaceStore';

export default function Page() {
  const { groupMaker } = useWorkSpaceStore();
  console.log(groupMaker);
  return (
    <>
      <Progress value={99} className="h-[1px] mb-9" />
      <div className="grid w-full max-w-sm items-center mb-11">
        <Label htmlFor="id" className="text-xs text-[#1F2937] font-normal mb-3">
          5. 본인의 테스크를 작성해주세요!
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="id"
            placeholder="일등에게 맛있는 밥 사주기"
            className="w-full h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
          />
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center mb-11">
        <Label htmlFor="id" className="text-xs text-[#1F2937] font-normal mb-3">
          + 그룹을 나타내는 태그를 적어주세요! (선택)
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="id"
            placeholder="헬스, 러닝, 필라테스 등"
            className="w-[210px] h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
          />
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center mb-11">
        <Label htmlFor="id" className="text-xs text-[#1F2937] font-normal mb-3">
          + 간단한 그룹 설명을 해주세요! (선택)
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="id"
            placeholder="그룹목표, 소개 등"
            className="w-[210px] h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="fixed bottom-10 w-11/12 h-11 bg-[#3B82F6] rounded-lg text-base text-white">
          그룹 만들기 완료
        </button>
      </div>
    </>
  );
}
