import {useDispatch} from 'react-redux';
import {wrapper} from '../redux/store.js';
import {serverRenderClock, startClock} from '../redux/tick/actions.js';
import Page from '../components/Page.jsx';

export default function Index(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = dispatch(startClock());

    return () => {
      clearInterval(timer);
    }
  }, []);

  return <Page title="Home" linkTo="/other"/>;
}

export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
  store.dispatch(serverRenderClock(true));
});
