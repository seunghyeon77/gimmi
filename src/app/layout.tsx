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
  themeColor: 'white',
  icons: {
    other: [
      {
        url: 'public/images/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
        media:
          '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  viewportFit: 'cover',
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
