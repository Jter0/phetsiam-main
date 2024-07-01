import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleTagManager } from '@next/third-parties/google'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-M2TK8GLR	" />
      <body>{children}</body>
    </html>
  )
}


const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return children;
};

export default Layout;
