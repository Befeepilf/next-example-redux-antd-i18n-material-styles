import {wrapper} from '../redux/store.js';
import 'antd/dist/antd.css';

function App({Component, pageProps}) {
  React.useEffect(() => {
    // remove server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles)
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return <Component {...pageProps}/>
}

export default wrapper.withRedux(App);
