// eslint-disable-next-line @next/next/no-document-import-in-page
import twindConfig from '@styles/twindConfig';
import withTwindDocument from '@twind/next/shim/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
// export default withTwindDocument(twindConfig, CustomDocument);
