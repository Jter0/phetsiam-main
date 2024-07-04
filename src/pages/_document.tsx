import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/img/favicon.svg" type="image/x-icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M2TK8GLR');
            `,
          }}
        />
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-SRKH6CF9NK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SRKH6CF9NK');
            `
          }}
        />
      </Head>
      <body>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe title="Phetsiam PE Pipe" src="https://www.googletagmanager.com/ns.html?id=GTM-M2TK8GLR"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
