'use client';

import Image from 'next/image';
import backArrow from '../../../../public/svgs/backArrow.svg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import AuthButton from '../_components/AuthButton';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div className="mt-14 relative">
      <Image
        src={backArrow}
        alt="backArrow"
        className="w-6 absolute"
        onClick={() => router.push('/login')}
      />
      <h1 className="text-base font-normal text-center">이메일로 회원가입</h1>
      <div className="mt-16 mb-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="text-xs">
            아이디
          </Label>
          <div className="flex justify-between items-center">
            <Input
              type="email"
              id="email"
              placeholder="영어+숫자 8자~12자"
              className="w-56"
            />
            <Button className="w-24">중복확인</Button>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3.5">
          <Label htmlFor="password" className="text-xs">
            비밀번호
          </Label>
          <div className="flex justify-between items-center">
            <Input
              type="password"
              id="password"
              placeholder="영어+숫자+특수문자 8자 이상,20자 이하"
              className="w-full"
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3.5">
          <Label htmlFor="password" className="text-xs">
            비밀번호 재확인
          </Label>
          <div className="flex justify-between items-center">
            <Input
              type="password"
              id="password"
              placeholder="비밀번호 재확인"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="text" className="text-xs">
          닉네임
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="email"
            id="email"
            placeholder="영어+한글+초성+숫자 2자~5자"
            className="w-56"
          />
          <Button className="w-24">중복확인</Button>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-48">
        <Label htmlFor="email" className="text-xs">
          이메일
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="email"
            id="email"
            placeholder="이메일 형식 @naver.com"
            className="w-full"
          />
        </div>
      </div>
      <AuthButton title="회원가입" />
    </div>
  );
}
