import GtmTrustModal from './components/GtmTrustModal';
import Loading from './components/Loading';
import Router from './router';

const App = () => {
  return (
    <>
      <Router />
      <Loading />
      <GtmTrustModal />
    </>
  );
};

export default App;
