import NowPlaying from '../components/sections/NowPlaying.jsx';

export default function Index() {
  return (
    <div>
      <NowPlaying/>
    </div>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common']
});