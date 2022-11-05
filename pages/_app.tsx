import "../styles/globals.scss";
import "@code-hike/mdx/dist/index.css";

import type { AppProps } from "next/app";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
