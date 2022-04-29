/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import withApollo from "../lib/apollo";
import Page from "../components/Page";
import "../components/styles/nav.css";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default withApollo({ ssr: true })(MyApp);
