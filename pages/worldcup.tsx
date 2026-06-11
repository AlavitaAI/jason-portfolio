import Head from 'next/head';

export default function WorldCup() {
  return (
    <>
      <Head>
        <title>World Cup 2026 Prediction Pool</title>
        <meta name="description" content="FIFA World Cup 2026 Prediction Pool - Pick your winners and compete with friends!" />
      </Head>
      <iframe
        src="/worldcup.html"
        style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
        title="World Cup 2026 Prediction Pool"
      />
    </>
  );
}
