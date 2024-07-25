'use client';

import { feedBack } from '@/api/check';
import BackArrow from '../_components/BackArrow';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';

export default function Page() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    if (value === '') return;
    try {
      const res = await feedBack(value);
      console.log(res);
      if (res.status === 200) {
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-6 py-12 h-screen">
      <Dialog open={open}>
        <DialogContent className="w-9/12 rounded-lg h-36 ">
          <div className="text-center text-base mt-4 mb-4">
            정말정말 감사합니다
          </div>

          <div className="flex justify-around items-center border-t-[1px] -mx-6">
            <div
              className="text-[#3B82F6] py-3 px-12 text-sm"
              onClick={() => router.back()}
            >
              간식받기💙
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <BackArrow />
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="text-xl mb-4">지미 피드백하기</div>
          <div className="w-full h-16">
            <form>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-[#FEF9C3] py-5 w-full rounded-lg px-3"
                placeholder="지미를 위해 패드백을 남겨주세요!"
              />
            </form>
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-[#EFF6FF] py-4 mb-11"
          onClick={handleSubmit}
        >
          <button className="text-main text-base">피드백 완료</button>
        </div>
      </div>
    </div>
  );
}
