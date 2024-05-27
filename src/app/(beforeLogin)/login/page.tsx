'use client';

import { useRouter } from 'next/navigation';
import AuthButton from '../_components/AuthButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import customAxios from '@/utils/cutstomAxios';

type FormProps = {
  id: string;
  password: string;
};

// 유효성 검사
const idRegex = /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/g;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormProps>();

  const onsubmit: SubmitHandler<FormProps> = async (data) => {
    try {
      const res = await customAxios.post('/auth/welcome', {
        id: data.id,
        password: data.password,
      });
      localStorage.clear();
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };
  console.log(errors);

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
            {...register('id', {
              required: '아이디를 입력해주세요.',
              pattern: {
                value: idRegex,
                message: '형식 맞게 써라',
              },
            })}
          />
          <input
            className="w-full h-11 border-b-2 placeholder:p-3"
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              pattern: {
                value: passwordRegex,
                message: '형식 맞게 쓰라고',
              },
            })}
          />
        </form>
      </div>
      {errors?.id?.type === 'required' && <p>{errors?.id?.message}</p>}

      <div onClick={handleSubmit(onsubmit)}>
        <AuthButton title="로그인" type="submit" />
      </div>
      <div onClick={() => router.push('/signup')}>
        <AuthButton title="회원가입" />
      </div>
    </div>
  );
}
