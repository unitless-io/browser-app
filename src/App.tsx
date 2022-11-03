import GtmAlertDialog from '@app/components/GtmAlertDialog';
import Loading from '@app/components/Loading';
import Router from '@app/router';

const App = () => {
  return (
    <>
      <Router />
      <Loading />
      <GtmAlertDialog />
    </>
  );
};

export default App;
