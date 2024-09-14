'use client';

type Props = {
  title: string;
  type?: 'submit' | undefined;
  disabled?: boolean;
};

//test

import { Button } from '@/components/ui/button';

export default function AuthButton({ title, type, disabled }: Props) {
  return (
    <div className="flex justify-center items-center mb-4">
      <Button
        disabled={disabled}
        type={type}
        className="w-full h-12 rounded-3xl bg-main"
      >
        {title}
      </Button>
    </div>
  );
}
