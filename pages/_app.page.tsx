import App from "next/app";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "react-redux";
import { ThemeProvider } from "styled-components";
import { wrapper } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { initTheme } from "store/core/theming";
import BaseStyle, { currentThemeSelector } from "global/theming";
import { getLocale, getMessage } from "global/utils";
import { IntlProvider } from "global/components";
// Import css
import "antd/dist/antd.css";
// Import Components
import { NavigationBar } from "global/components";

if (typeof window === "undefined") {
  // dom parser for FormatedHTMLMessages
  global.DOMParser = new (require("jsdom").JSDOM)().window.DOMParser;
}

function MyApp({ Component, pageProps, locale, messages }: any) {
  const dispatch = useDispatch();
  const store = useStore();
  const currentTheme = useSelector(currentThemeSelector);

  useEffect(() => {
    dispatch(initTheme());
  }, []);

  return (
    <PersistGate
      persistor={(store as any).__persistor}
      loading={<div>Loading...</div>}
    >
      <IntlProvider locale={locale} messages={messages}>
        <ThemeProvider theme={currentTheme}>
          <NavigationBar {...pageProps} />
          <Component {...pageProps} />
          <BaseStyle />
        </ThemeProvider>
      </IntlProvider>
    </PersistGate>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  // Keep in mind that this will be called twice on server, one for page and second for error page
  ctx.store.dispatch({ type: "APP", payload: "was set in _app" });

  const locale = await getLocale(ctx);
  const messages = await getMessage(locale);

  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      // Some custom thing for all pages
      appProp: ctx.pathname,
    },
    locale,
    messages,
  };
};

export default wrapper.withRedux(MyApp);
