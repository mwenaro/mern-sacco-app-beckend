
// import { AppProps } from "next/app";
// import { useRouter } from "next/router";
import { useEffect } from 'react';
import * as gtag from './../../utils/Gtag'
import { PageWrapper } from '../../components';

const App = () => {
  // const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
   
  }, []);

  return <div>
    <PageWrapper>
        <div>Analytics Page</div>
    </PageWrapper>
  </div>;
};

export default App;