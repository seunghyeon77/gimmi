import { ReactNode } from 'react';
import BackArrow from './_components/BackArrow';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="px-6 py-12 bg-custom-gradient2 h-svh">
      <BackArrow />
      {children}
    </div>
  );
}
