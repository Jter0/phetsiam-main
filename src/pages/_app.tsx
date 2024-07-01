import "@/styles/globals.css";
import "swiper/swiper-bundle.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';
import { Lexend } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store"

const lexend = Lexend({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={lexend.className} >
        <Provider store={store} >
          <Component  {...pageProps} />
        </Provider>
      </div>
    </ThemeProvider>
  );
}

import { GoogleTagManager } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // This event will trigger the pageview in Google Analytics
      window.gtag('config', 'G-SRKH6CF9NK', {
        page_path: url,
      });
    };

    // When the component is mounted, subscribe to router changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GoogleTagManager gtmId="GTM-M2TK8GLR" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
