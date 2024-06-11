import { ReactNode } from 'react';
import TopBar from './_components/TopBar';

//여기에서만 네브바 넣기 - 워크스페이스 부분,

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="px-6 py-12">
      <TopBar />
      {children}
    </div>
  );
}
