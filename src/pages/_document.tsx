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
          <meta name="title" content="Solution services for Impact DAOs" />
          <meta
            name="description"
            content="General Magic solves the needs of Public Good projects by assigning top-notch Web3 professionals to assist them in their goals, either by integrating with existing teams, or creating resources from scratch."
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
            content="Solution services for Impact DAOs"
          />
          <meta
            property="og:description"
            content="General Magic solves the needs of Public Good projects by assigning top-notch Web3 professionals to assist them in their goals, either by integrating with existing teams, or creating resources from scratch."
          />
          <meta property="og:site_name" content="General Magic" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@generalmagicio" />
          <meta
            name="twitter:title"
            content="Solution services for Impact DAOs"
          />
          <meta
            name="twitter:description"
            content="General Magic solves the needs of Public Good projects by assigning top-notch Web3 professionals to assist them in their goals, either by integrating with existing teams, or creating resources from scratch."
          />
          <meta
            name="twitter:image"
            content="https://generalmagic.vercel.app/api/og"
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
