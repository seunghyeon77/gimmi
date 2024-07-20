'use client';

import EditButton from '@/app/(afterLogin)/mypage/_components/EditButton';

import { useState } from 'react';

export default function Page() {
  const [error, setError] = useState('');
  const [open, setOpen] = useState(true);

  const handleSubmit = () => {};
  return (
    <div>
      <div className="px-5">
        <h1 className="text-xl mb-5">회원 탈퇴하기</h1>
        <form>
          <input
            className="w-full h-12 bg-[#F9FAFB] rounded-lg placeholder:px-3"
            placeholder="회원탈퇴를 원하시면 비밀번호를 입력해주세요."
          />
          <div className="absolute right-3 bottom-4"></div>
        </form>
        <span className="text-[10px] text-[#EF4444] ml-2">{error}</span>
      </div>

      <div onClick={handleSubmit}>
        <EditButton>계속하기</EditButton>
      </div>
    </div>
  );
}
