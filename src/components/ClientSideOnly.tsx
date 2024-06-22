import useIsClientSide from "@/lib/hooks/useIsClientSide";
import { PropsWithChildren } from "react";

function ClientSideOnly({ children }: PropsWithChildren) {
  const isClient = useIsClientSide();

  return isClient ? children : null;
}

export default ClientSideOnly;
