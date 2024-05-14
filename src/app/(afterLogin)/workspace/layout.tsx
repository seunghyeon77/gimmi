import { ReactNode } from 'react';
import ReactQueryProvider from '../_components/ReactQueryProvider';
import LoadingScreen from '../_components/LoadingScreen';

//여기에서만 네브바 넣기 - 워크스페이스 부분,

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ReactQueryProvider>
      <LoadingScreen></LoadingScreen>
      {children}
    </ReactQueryProvider>
  );
}
