import GtmTrustModal from '@app/components/GtmTrustModal';
import Loading from '@app/components/Loading';
import Router from '@app/router';

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
