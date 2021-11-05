import Layout from '@layout';
import { config } from '@styles/twindConfig';
import withTwindApp from '@twind/next/shim/app';
import { AppProps } from 'next/app';
import * as React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// export default withTwindApp(config, MyApp);
export default MyApp;
