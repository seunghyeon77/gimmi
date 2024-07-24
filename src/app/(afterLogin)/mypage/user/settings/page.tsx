'use client';

import { logout } from '@/api/auth';
import Link from 'next/link';

export default function Page() {
  const onLogout = async () => {
    await logout();
  };
  return (
    <div>
      <div className="px-5">
        <div>
          <h5 className="text-base text-[#D9D9D9]">회원정보</h5>
          <div
            className="text-xl text-[#1F2937] py-7 border-b-[1px]"
            onClick={onLogout}
          >
            로그아웃하기
          </div>
          <Link href={'/mypage/user/withdraw'}>
            <div className="text-xl text-[#1F2937] py-7 border-b-[1px]">
              회원 탈퇴하기
            </div>
          </Link>
          <Link href={'/feedBack'}>
            <div className="text-xl text-[#1F2937] py-7">피드백하기 ♡</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
