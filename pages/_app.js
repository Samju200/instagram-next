import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {' '}
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />;
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}

export default MyApp;
