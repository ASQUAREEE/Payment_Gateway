import { type NextPage } from "next";
import { createWrapper } from "next-redux-wrapper";
import { type AppType, type AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { store } from "~/redux/store";
import { api } from "~/utils/api";
import { ThemeProvider } from "next-themes";
import Navbar from "~/components/Navbar";
import Script from "next/script";
import Footer from "~/components/Footer";
// import { ClerkProvider } from '@clerk/nextjs';
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";

const wrapper = createWrapper(() => store);

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const { store } = wrapper.useWrappedStore(pageProps);
  const props = wrapper.useWrappedStore(pageProps).props as object;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Project</title>
        <meta name="description" content="project" />
      </Head>
      <Provider store={store}>
        {/* <ThemeProvider attribute="class"> */}
          
        {/* <ClerkProvider> */}
          <div className="min-h-screen bg-white dark:bg-nft-dark">
            {/* <Navbar /> */}
            <div className="pt-65">{getLayout(
              <>
            <Component {...props} />
            <Toaster />
            </>
            )}</div>
            {/* <Footer /> */}
          </div>
          {/* </ClerkProvider> */}
          <Script
            src="https://kit.fontawesome.com/b260d03c30.js"
            crossOrigin="anonymous"
          />
        {/* </ThemeProvider> */}
      </Provider>
    </>
  );
};

export default api.withTRPC(MyApp as AppType<AppPropsWithLayout>);
