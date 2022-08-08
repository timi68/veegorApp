import { AppProps } from "next/app";
import "../styles/scss/global.scss";
import "../styles/scss/landingPage.scss";
import "../styles/scss/auth.scss";
import Head from "next/head";

function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Veegor - your easy access to the blockchain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Veegor Blockchain App" />
        <meta
          name="keywords"
          content="Erc20, Ethereum, Binance, Bitcoin, Matic"
        />
        <meta name="author" content="veegor" />
        <meta name="email" content="info@veegor.io" />
        <meta name="website" content="https://veegor.io" />
        <meta name="Version" content="v1.0.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
