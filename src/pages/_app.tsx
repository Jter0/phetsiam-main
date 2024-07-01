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


