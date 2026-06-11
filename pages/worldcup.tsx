import Head from 'next/head';

export default function WorldCup() {
  return (
    <>
      <Head>
        <title>World Cup 2026 Pool</title>
        <meta name="description" content="FIFA World Cup 2026 Prediction Pool - Pick your winners and compete with friends!" />
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, background: '#0f1117' }}>
        <iframe
          src="/worldcup.html"
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          title="World Cup 2026 Prediction Pool"
        />
      </div>
    </>
  );
}
