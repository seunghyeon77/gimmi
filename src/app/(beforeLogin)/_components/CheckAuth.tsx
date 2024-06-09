'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckAuth() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      router.push('/');
    }
  }, [router]);

  return <></>;
}
