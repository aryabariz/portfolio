import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
