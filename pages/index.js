import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Home(props) {
  return (
    <>
      {props.ssrWorking ? (
        <div className=" bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
          <Head>
            <title>Samju Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Modal />
          <Header />
          <Feed />
        </div>
      ) : (
        <h2> SSR not working</h2>
      )}
    </>
  );
}
export async function getServerSideProps() {
  return { props: { ssrWorking: true } };
}
