import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/GT-Planar-Regular-Trial.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/GT-Planar-Light-Trial.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <style global jsx>{`
        @font-face {
          font-family: 'GT-Planar';
          src: url('/GT-Planar-Light-Trial.woff2');
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'GT-Planar';
          src: url('/GT-Planar-Regular-Trial.woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'GT-Planar';
          src: url('/GT-Planar-Italic-15-Black-Trial.woff2');
          font-weight: 700;
          font-style: italic;
          font-display: swap;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
