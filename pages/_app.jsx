import {wrapper} from '../redux/store.js';
import {loadConfig, loadNowPlaying} from '../redux/movies/actions.js';
import {I18nContext} from 'next-i18next';
import {i18n, appWithTranslation} from '../i18n.js';
import {makeStyles} from '@material-ui/styles';
import {Layout, Button} from 'antd';
import 'antd/dist/antd.css';

const {Header, Content} = Layout;

const useStyles = makeStyles({
  layout: {
    minHeight: '100vh'
  },
  content: {
    minHeight: '100%'
  }
});

function App({Component, pageProps}) {
  const {i18n: {language}} = React.useContext(I18nContext);
  const classes = useStyles();

  React.useEffect(() => {
    // remove server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles)
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <Layout className={classes.layout}>
      <Header>
        <Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}>{language}</Button>
      </Header>

      <Content className={classes.content}>
        <Component {...pageProps}/>
      </Content>
    </Layout>
  )
}

App.getInitialProps = async ({ctx, Component}) => {
  await ctx.store.dispatch(loadConfig());
  await ctx.store.dispatch(loadNowPlaying());
  
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {pageProps};
};

export default wrapper.withRedux(appWithTranslation(App));