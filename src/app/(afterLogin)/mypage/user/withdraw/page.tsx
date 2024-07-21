'use client';

import { withdraw } from '@/api/auth';
import EditButton from '@/app/(afterLogin)/mypage/_components/EditButton';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function Page() {
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [password, setPasword] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await withdraw(password);
      console.log(res);
      if (res.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setOpen(false);
        setError('비밀번호를 확인해주세요.');
        setPasword('');
      }
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
        <DialogContent className="w-9/12 rounded-lg h-36 ">
          <div className="text-center text-sm mt-4 mb-4">
            정말 탈퇴하시겠습니까?
          </div>

          <div className="flex justify-around items-center border-t-[1px] -mx-6">
            <DialogClose>
              <div className="text-[#3B82F6] py-3 px-12 border-r-[1px]">
                cancel
              </div>
            </DialogClose>
            <div className="text-[#D1D5DB] py-3 px-12" onClick={handleSubmit}>
              yes
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="px-5">
        <h1 className="text-xl mb-5">회원 탈퇴하기</h1>
        <form>
          <input
            className="w-full h-12 bg-[#F9FAFB] rounded-lg placeholder:text-xs px-3"
            placeholder="회원탈퇴를 원하시면 비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPasword(e.currentTarget.value)}
          />
          <div className="absolute right-3 bottom-4"></div>
        </form>
        <span className="text-[10px] text-[#EF4444] ml-2">{error}</span>
      </div>

      <div onClick={() => setOpen(true)}>
        <EditButton>탈퇴하기</EditButton>
      </div>
    </div>
  );
}
