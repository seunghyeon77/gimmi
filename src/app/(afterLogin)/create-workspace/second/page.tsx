'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import plus from '@/../public/svgs/plus.svg';
import delIcon from '@/../public/svgs/delete.svg';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface InputItem {
  id: number;
  title: string;
  placeholder?: string;
}

export default function Page() {
  const nextID = useRef<number>(0);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    { id: 0, title: '', placeholder: 'ex 풀업 10회' },
    { id: 1, title: '', placeholder: 'ex 벤치프레스 10회' },
    { id: 2, title: '', placeholder: '스쿼트 10회' },
    { id: 3, title: '', placeholder: '러닝 20분' },
  ]);

  // 추가
  function addInput() {
    const input = {
      // 새로운 인풋객체를 하나 만들고,
      id: nextID.current, // id 값은 변수로 넣어주고,
      title: '', // 내용은 빈칸으로 만들자
    };

    setInputItems([...inputItems, input]); // 기존 값에 새로운 인풋객체를 추가해준다.
    nextID.current += 1; // id값은 1씩 늘려준다.
  }

  // 삭제
  function deleteInput(index: number) {
    // 인덱스 값을 받아서
    setInputItems(inputItems.filter((item) => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    // ↓ 이벤트 객체를 받고, 인덱스를 받자
    if (index > inputItems.length) return; // 혹시 모르니 예외처리
    // 인풋배열을 copy 해주자
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].title = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자
    setInputItems(inputItemsCopy); // 그걸 InputItems 에 저장해주자
  }

  return (
    <>
      <Progress value={66} className="h-[1px] mb-9" />
      <div className="grid w-full max-w-sm items-center mb-11">
        <Label htmlFor="id" className="text-xs text-[#6B7280] font-normal mb-2">
          3. 그룹의 목표점수를 설정해주세요!
        </Label>
        <div className="flex justify-between items-center">
          <Input
            type="text"
            id="id"
            placeholder="10 단위로만 설정가능해요"
            className="w-full h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
          />
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center">
        <Label htmlFor="id" className="text-xs text-[#6B7280] font-normal mb-2">
          4. 미션 항목을 만들어주세요!
        </Label>
        <div
          className="w-full h-8 flex justify-center items-center mb-3 mt-1"
          onClick={addInput}
        >
          <Image src={plus} alt="plus" />
        </div>
        {inputItems.map((item, index) => (
          <div className="flex justify-between items-center mb-3" key={index}>
            <Input
              type="text"
              id="id"
              className="w-full h-[52px] bg-[#F9FAFB] placeholder:text-xs placeholder:text-[#D1D5DB]"
              placeholder={item.placeholder}
              onChange={(e) => handleChange(e, index)}
              value={item.title}
            />
            <div
              className="flex justify-center items-center absolute right-10"
              onClick={() => deleteInput(index)}
            >
              <Image src={delIcon} alt="delete-icon" />
            </div>
          </div>
        ))}
      </div>
      <Link href={'/create-workspace/third'}>
        <div className="w-full flex justify-center items-center">
          <button className="fixed bottom-10 w-11/12 h-11 bg-[#DBEAFE] rounded-lg text-base text-[#6B7280]">
            계속하기
          </button>
        </div>
      </Link>
    </>
  );
}
