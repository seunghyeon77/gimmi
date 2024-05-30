import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const APP_NAME = 'PWA App';
const APP_DEFAULT_TITLE = 'My Awesome PWA App';
const APP_TITLE_TEMPLATE = '%s - PWA App';
const APP_DESCRIPTION = 'Best PWA app in the world!';

// const inter = Inter({ subsets: ['latin'] });

const yungothic = localFont({
  src: '../../public/fonts/yungothic320.ttf',
  weight: '320',
  variable: '--font-yungothic',
});
const galmuri = localFont({
  src: '../../public/fonts/Galmuri9.ttf',
  weight: '320',
  variable: '--font-galmuri',
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor" className={`${yungothic.variable} ${galmuri.variable}`}>
      <body>{children}</body>
    </html>
  );
}
