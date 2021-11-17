import { AppProps } from 'next/app';
import '../styles/globals.css';

import Sidebar from '../components/Sidebar';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <div className="flex w-screen h-screen overflow-y-hidden">
      <Sidebar />
      <div className="w-screen">
        <Component className="overscroll-none" {...pageProps} />
      </div>
    </div>
  </div>
);

export default MyApp;
