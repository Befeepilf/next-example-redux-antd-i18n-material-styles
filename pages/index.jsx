import {useDispatch} from 'react-redux';
import {wrapper} from '../redux/store.js';
import {serverRenderClock, startClock} from '../redux/tick/actions.js';
import {withTranslation} from '../i18n.js';
import Page from '../components/Page.jsx';


function Index({t}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = dispatch(startClock());

    return () => {
      clearInterval(timer);
    }
  }, []);

  return <Page title={t('title')} linkTo="/other"/>;
}

export default withTranslation('index')(Index);

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
  store.dispatch(serverRenderClock(true));

  return {
    props: {namespacesRequired: ['common', 'index']}
  };
});
