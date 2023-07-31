import 'bootstrap/dist/css/bootstrap.css'
import type { AppContext, AppProps } from 'next/app'
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Props<P> = AppProps & P;

type PropsWithLayout = {
  Component: NextPageWithLayout;
};

interface ApplyType<P> {
  (props: Props<P>): ReactElement;
  getInitialProps?: (context: AppContext) => Props<P> | Promise<Props<P>>;
}

const App: ApplyType<PropsWithLayout> = ({ Component, pageProps }) => {
  const layout = Component.getLayout || ((page) => page);
  return (
    <>
      {layout(<Component {...pageProps} />)}
    </>
  )
}

export default App
