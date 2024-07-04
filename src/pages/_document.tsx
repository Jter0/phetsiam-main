import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/img/favicon.svg" type="image/x-icon" />{/*
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2TK8GLR');</script>*/}
      </Head>
      <body>
        {/*<noscript><iframe title="Phetsiam PE Pipe" src="https://www.googletagmanager.com/ns.html?id=GTM-M2TK8GLR" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>*/}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
