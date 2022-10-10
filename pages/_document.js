import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
        <meta
          name="description"
          content="My little corner of the internet."
        />
        <meta
          name="keywords"
          content="tyler, ty, j, cagle, personal, website, webgl, threejs"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="/preview.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/common/app_icon.png"
        /> */}
        <meta property="og:site_name" content="TY_JC" />
        <meta name="title" content="Tyler J." />
        <meta
          name="description"
          content="My little corner of the internet."
        />
        <meta
          property="og:title"
          content="TY_JC"
        />
        <meta property="og:url" content="https://tylerj.me/" />
        <meta
          property="og:description"
          content="My little corner of the internet."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tjcages" />
        <meta name="twitter:creator" content="@tjcages" />
        <meta
          name="twitter:image"
          content="/preview.png"
        />
        <meta name="twitter:image:alt" content="TY_JC preview image" />
        <meta
          property="og:image"
          content="/preview.png"
        />

        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G71PWJVQJR"
        />
        <Script
          id="google-analytics-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-G71PWJVQJR');
  `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
