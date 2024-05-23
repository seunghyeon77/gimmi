'use client';

import { useRouter } from 'next/navigation';
import AuthButton from '../_components/AuthButton';
import { useForm } from 'react-hook-form';

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className="mt-44 mb-16 flex justify-center items-center flex-col font-medium">
        <h1 className="text-5xl mb-3">GYMMI</h1>
        <h3 className="text-sm">지미와 함께 운동의욕을 채워보세요!</h3>
      </div>
      <div className="mb-20">
        <form>
          <input
            className="w-full h-11 border-b-2 placeholder:p-3 mb-4"
            type="email"
            placeholder="아이디"
          />
          <input
            className="w-full h-11 border-b-2 placeholder:p-3"
            type="password"
            placeholder="비밀번호"
          />
        </form>
      </div>
      <AuthButton title="로그인" />
      <div onClick={() => router.push('/signup')}>
        <AuthButton title="회원가입" />
      </div>
    </div>
  );
}
