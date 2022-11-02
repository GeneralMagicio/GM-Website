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
          <meta
            name="og:image"
            content="https://generalmagic.vercel.app/api/og"
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
