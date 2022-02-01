import { Switch, Route } from 'react-router-dom';
import AuthView from './views/AuthView';
import LandingView from './views/LandingView';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <LandingView />
        </Route>
        <Route path='/login' exact>
          <AuthView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
