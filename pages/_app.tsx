import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/draft") {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
