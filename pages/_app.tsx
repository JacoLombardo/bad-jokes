import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dtl48kr1u/image/upload/v1694445159/personal-site/j_nx7enz.png"
          sizes="any"
        />
        <title>Bad Jokes</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
