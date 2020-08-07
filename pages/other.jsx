import {useDispatch} from 'react-redux';
import {wrapper} from '../redux/store.js';
import {serverRenderClock, startClock} from '../redux/tick/actions.js';
import {withTranslation} from '../i18n.js';
import Page from '../components/Page.jsx';

function Other({t}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = dispatch(startClock());

    return () => {
      clearInterval(timer);
    }
  }, []);

  return <Page title={t('title')} linkTo="/index"/>;
}

export default withTranslation('other')(Other);

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  store.dispatch(serverRenderClock(true));

  return {
    props: {namespacesRequired: ['common', 'other']}
  };
});