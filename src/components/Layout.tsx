import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";

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
