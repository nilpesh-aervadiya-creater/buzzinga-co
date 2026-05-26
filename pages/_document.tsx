import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Buzzinga Co. | AI-Native Design & Development Services" />
        <link href="/favicon.png" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/favicon.png" rel="icon" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
