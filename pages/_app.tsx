import {AppProps} from "next/app";
import "../public/fonts/poppins.css";
import "../styles/scss/global.scss";
import "../styles/scss/landingPage.scss";
import "../styles/scss/auth.scss";

function App(props: AppProps): JSX.Element {
	const {Component, pageProps} = props;
	return <Component {...pageProps} />;
}

export default App;
