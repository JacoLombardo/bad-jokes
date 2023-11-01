import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Media/smile3.png" sizes="any" />
        <title>Bad Jokes</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
