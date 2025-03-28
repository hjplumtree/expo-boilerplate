import { SWRConfig } from "swr";

// Default SWR configuration options
export const swrConfig = {
  // Disable real-time revalidation for development
  revalidateOnFocus: false,
  revalidateOnReconnect: false,

  // Error handling
  onError: (error: any) => {
    console.error("SWR Error:", error);
  },
};

// SWR Provider component
export function SWRProvider({ children }: { children: React.ReactNode }) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
