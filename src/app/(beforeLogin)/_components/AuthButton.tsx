'use client';

type Props = {
  title: string;
};

import { Button } from '@/components/ui/button';

export default function AuthButton({ title }: Props) {
  return (
    <div className="flex justify-center items-center mb-4">
      <Button className="w-full h-12 rounded-3xl">{title}</Button>
    </div>
  );
}
