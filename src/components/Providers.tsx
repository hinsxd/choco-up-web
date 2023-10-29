import { OverlayProvider } from "@/components/Overlay";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};
