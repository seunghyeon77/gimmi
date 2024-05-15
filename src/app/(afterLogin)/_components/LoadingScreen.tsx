'use client';

import { useIsFetching } from '@tanstack/react-query';

export default function LoadingScreen() {
  const isFetching = useIsFetching();
  const display = isFetching ? 'flex' : 'none';

  // 로딩중 스핀바 띄우기
  return <div style={{ position: 'absolute', display }}>Loading...</div>;
}
