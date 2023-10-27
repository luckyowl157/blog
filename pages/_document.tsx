import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return <Html lang='en'>

      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#00ACD8' />
        <meta name='msapplication-TileColor' content='#00ACD8' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  }
}

export default MyDocument