import {wrapper} from '../redux/store.js';
import {I18nContext} from 'next-i18next';
import {i18n, appWithTranslation} from '../i18n.js';
import {Layout, Button} from 'antd';
import 'antd/dist/antd.css';

const {Header, Content} = Layout;

function App({Component, pageProps}) {
  const {i18n: {language}} = React.useContext(I18nContext);

  React.useEffect(() => {
    // remove server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles)
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <Layout>
      <Header>
        <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}>{language}</Button>
      </Header>

      <Content>
        <Component {...pageProps}/>
      </Content>
    </Layout>
  )
}

export default appWithTranslation(wrapper.withRedux(App));