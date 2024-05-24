'use client';

type Props = {
  title: string;
  type?: 'submit' | undefined;
};

import { Button } from '@/components/ui/button';

export default function AuthButton({ title, type }: Props) {
  return (
    <div className="flex justify-center items-center mb-4">
      <Button type={type} className="w-full h-12 rounded-3xl">
        {title}
      </Button>
    </div>
  );
}
