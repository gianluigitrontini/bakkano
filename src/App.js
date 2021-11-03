import { Switch, Route } from 'react-router-dom';
import AuthView from './views/AuthView';
// import AdminProducts from './components/views/AdminProducts';
// import AdminHeader from './components/Admin/Header';
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
        {/*<Route path='/admin' exact>*/}
        {/*  <AdminHeader />*/}
        {/*</Route>*/}
        {/*<Route path='/admin/products' exact>*/}
        {/*  <AdminHeader />*/}
        {/*  <AdminProducts />*/}
        {/*</Route>*/}
      </Switch>
    </>
  );
}

export default App;
