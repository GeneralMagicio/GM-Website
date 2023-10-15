import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="General Magic" />
          <meta name="title" content="We build Web3 products, governance, and economic systems" />
          <meta
            name="description"
            content="Web3 professionals building social impact solutions throughout Web3 and Public Goods space."
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://api.typedream.com/v0/document/public/b28e9122-5924-4381-8bae-b7b550dff543_GM_Dark_png.png?bucket=document"
          />
          <link
            rel="apple-touch-icon"
            href="https://api.typedream.com/v0/document/public/b28e9122-5924-4381-8bae-b7b550dff543_GM_Dark_png.png?bucket=document"
          />
          <meta property="og:url" content="https://www.generalmagic.io/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="We build Web3 products, governance, and economic systems"
          />
          <meta
            property="og:description"
            content="Web3 professionals building social impact solutions throughout Web3 and Public Goods space."
          />
          <meta
            name="og:image"
            content="https://generalmagic.vercel.app/api/og_image"
          />
          <meta property="og:site_name" content="General Magic" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@generalmagicio" />
          <meta
            name="twitter:title"
            content="We build Web3 products, governance, and economic systems"
          />
          <meta
            name="twitter:description"
            content="Web3 professionals building social impact solutions throughout Web3 and Public Goods space."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
