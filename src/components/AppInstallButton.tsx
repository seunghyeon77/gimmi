'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}
declare global {
  interface Window {
    beforeInstallPromptEvent: BeforeInstallPromptEvent;
  }
  interface Navigator {
    standalone?: boolean;
  }
}

export default function AppInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<
    BeforeInstallPromptEvent | undefined
  >(undefined);

  console.log(deferredPrompt);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('sw worker registered', reg))
        .catch(() => console.log('failed'));
    }
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const checkUnsupportedBrowser = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    console.log(userAgent);

    return (
      (userAgent.indexOf('safari') > -1 &&
        userAgent.indexOf('chrome') <= -1 &&
        userAgent.indexOf('chromium') <= -1) ||
      (userAgent.indexOf('firefox') > -1 &&
        userAgent.indexOf('seamonkey') <= -1)
    );
  };

  const promptAppInstall = async () => {
    const isUnsupportedBrowser = checkUnsupportedBrowser();
    if (isUnsupportedBrowser) {
      alert(
        '공유 아이콘 -> 홈 화면에 추가를 클릭해 앱으로 편리하게 이용해보세요!',
      );
    }
    if (!isUnsupportedBrowser) {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        setDeferredPrompt(undefined);
      } else {
        alert('이미 저희 서비스를 설치해주셨어요!');
      }
    }
  };
  return (
    <div className="w-full fixed bottom-1">
      <div
        className="bg-main flex justify-center items-center py-5"
        onClick={promptAppInstall}
      >
        <button className="text-white text-sm">정말 1초만에 앱설치하기</button>
      </div>
      <div className="text-center text-xs">
        <span className="underline-offset-1">그냥 웹으로 계속 볼게요</span>
      </div>
    </div>
  );
}
