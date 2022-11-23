import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Vision Network Việt Nam JSC thành lập vào năm 2011 và là một đơn vị xây dựng các giải pháp về công nghệ thông tin, ứng dụng trong nhiều lĩnh vực tại thị ..."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
