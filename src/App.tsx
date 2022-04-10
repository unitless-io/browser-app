import Loading from './components/Loading';
import useInit from './hooks/use-init';
import Router from './router';
import { initAppAction } from './store/entities/app/actions';

const App = () => {
  useInit(initAppAction);

  return (
    <>
      <Router />
      <Loading />
    </>
  );
};

export default App;
