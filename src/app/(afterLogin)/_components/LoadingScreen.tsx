'use client';

import { useIsFetching } from '@tanstack/react-query';

export default function LoadingScreen() {
  const isFetching = useIsFetching();
  const display = isFetching ? 'none' : 'none';

  // 로딩중 스핀바 띄우기
  return (
    <div style={{ top: 50, position: 'absolute', display }}>Loading...</div>
  );
}
