'use client';

import Image from 'next/image';
import backArrow from '../../../../public/svgs/backArrow.svg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import AuthButton from '../_components/AuthButton';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  emailRegex,
  idRegex,
  nicknameRegex,
  passwordRegex,
} from '@/constants/validation';

import { postSignup } from '@/api/auth';
import { verlifyDuplication } from '@/api/duplication';
import { duplicationType } from '@/constants/duplication';
import { useState } from 'react';

type FormProps = {
  id: string;
  password: string;
  password2: string;
  nickname: string;
  email: string;
};

export default function Page() {
  const router = useRouter();

  const [idCheck, setIdCheck] = useState(false);
  const [niknameCheck, setNicknameCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm<FormProps>({
    mode: 'onSubmit',
    defaultValues: {},
  });

  const pwd = watch('password');
  const id = watch('id');
  const nickname = watch('nickname');

  // if (errors.id) setIdCheck(false);
  // if (errors.nickname) setNicknameCheck(false);

  const verliffyDuplicate = async (type: string, value: string) => {
    try {
      const res = await verlifyDuplication({
        type,
        value,
      });
      //중복 검사 되었을때 상태 바꿔주기
      if (type === duplicationType.loginId) {
        clearErrors('id');
        setIdCheck(false);
        if (res.data.duplication === true) {
          setError('id', { message: '중복된 아이디입니다.' });
        } else {
          setIdCheck(true);
        }
      }
      if (type === duplicationType.nickname) {
        clearErrors('nickname');
        setNicknameCheck(false);
        if (res.data.duplication === true) {
          setError('nickname', { message: '중복된 닉네임입니다.' });
        } else {
          setNicknameCheck(true);
        }
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const onsubmit: SubmitHandler<FormProps> = async (data) => {
    if (!idCheck) {
      setError('id', { message: '아이디 중복확인이 필요합니다.' });
      return;
    }
    if (!niknameCheck) {
      setError('nickname', { message: '닉네임 중복확인이 필요합니다.' });
      return;
    }
    try {
      const res = await postSignup({
        loginId: data.id,
        nickname: data.nickname,
        email: data.email,
        password: data.password,
      });
      console.log(res);
      if (res.status === 200) {
        router.push('/login');
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

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
          <Label htmlFor="id" className="text-xs">
            아이디
          </Label>
          <div className="flex justify-between items-center">
            <Input
              type="text"
              id="id"
              placeholder="영어+숫자 8자~12자"
              className="w-56 bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
              {...register('id', {
                required: '필수 입력 사항입니다.',
                pattern: {
                  value: idRegex,
                  message: '영어 + 숫자 8자~12자입니다',
                },
              })}
            />
            <Button
              className="w-24 bg-[#E5E7EB] text-[#6B7280]"
              onClick={() => verliffyDuplicate(duplicationType.loginId, id)}
            >
              중복확인
            </Button>
          </div>
        </div>
        {errors?.id ? (
          <p className="text-[8px] text-[#EF4444] mt-1">
            {errors?.id?.message}
          </p>
        ) : idCheck ? (
          <p className="text-[8px] text-main mt-1">사용 가능한 아이디입니다.</p>
        ) : null}
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
              className="w-full bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
              {...register('password', {
                required: '필수 입력 사항입니다.',
                pattern: {
                  value: passwordRegex,
                  message: '영어+숫자+특수문자 8자~20자',
                },
              })}
            />
          </div>
          {errors?.password && (
            <p className="text-[8px] text-[#EF4444] mt-1">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-1">
          <Label htmlFor="password2" className="text-xs">
            비밀번호 재확인
          </Label>
          <div className="flex justify-between items-center">
            <Input
              type="password"
              id="password2"
              placeholder="비밀번호 재확인"
              className="w-full bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
              {...register('password2', {
                required: '비밀번호 재확인이 필요합니다.',
                validate: (value) =>
                  value === pwd || '비밀번호가 일치하지 않습니다.',
              })}
            />
          </div>
        </div>
        {errors?.password2 && (
          <p className="text-[8px] text-[#EF4444]">
            {errors?.password2?.message}
          </p>
        )}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="nickname" className="text-xs">
          닉네임
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="nickname"
            placeholder="영어+한글+초성+숫자 2자~5자"
            className="w-56 bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
            {...register('nickname', {
              required: '필수 입력 사항입니다.',
              pattern: { value: nicknameRegex, message: '2자~5자 이하입니다.' },
            })}
          />
          <Button
            className="w-24 bg-[#E5E7EB] text-[#6B7280]"
            onClick={() =>
              verliffyDuplicate(duplicationType.nickname, nickname)
            }
          >
            중복확인
          </Button>
        </div>
        {errors?.nickname ? (
          <p className="text-[8px] text-[#EF4444]">
            {errors?.nickname?.message}
          </p>
        ) : niknameCheck ? (
          <p className="text-[8px] text-main">사용 가능한 닉네임입니다.</p>
        ) : null}
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email" className="text-xs">
          이메일
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="email"
            id="email"
            placeholder="이메일 형식 @naver.com"
            className="w-full bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
            {...register('email', {
              required: '필수 입력 사항입니다.',
              pattern: { value: emailRegex, message: '형식에 맞지 않습니다.' },
            })}
          />
        </div>
        {errors?.email && (
          <p className="text-[8px] text-[#EF4444]">{errors?.email?.message}</p>
        )}
      </div>

      <div
        className="fixed w-full left-0 bottom-8 px-6"
        onClick={handleSubmit(onsubmit)}
      >
        <AuthButton
          title="회원가입"
          type="submit"
          disabled={!isValid || isSubmitting}
        />
      </div>
    </div>
  );
}
