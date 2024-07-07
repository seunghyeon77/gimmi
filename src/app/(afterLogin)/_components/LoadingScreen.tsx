'use client';

import { useIsFetching } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  const isFetching = useIsFetching();
  const display = isFetching ? 'inherit' : 'none';

  // 로딩중 스핀바 띄우기
  return (
    <div
      style={{
        position: 'fixed',
        display,
        zIndex: 4,
        top: '50%',
        left: '50%',
      }}
    >
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}
