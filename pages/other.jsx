import {useDispatch} from 'react-redux';
import {wrapper} from '../redux/store.js';
import {serverRenderClock, startClock} from '../redux/tick/actions.js';
import Page from '../components/Page.jsx';

export default function Other(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = dispatch(startClock());

    return () => {
      clearInterval(timer);
    }
  }, []);

  return <Page title="Other" linkTo="/index"/>;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  store.dispatch(serverRenderClock(true));
});