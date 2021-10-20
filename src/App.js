import Header from './components/Header';
import HeroSection from './components/Sections/HeroSection';
import BaseSection from './components/Sections/BaseSection';
import PercheScegliereNoiSection from './components/Sections/PercheScegliereNoiSection';
import ProductsSection from './components/Sections/Products/ProductsSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminProducts from './components/views/AdminProducts';
import AdminHeader from './components/Admin/Header';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header />
            <HeroSection />
            <BaseSection />
            <PercheScegliereNoiSection />
            <ProductsSection />
          </Route>
          <Route path='/admin' exact>
            <AdminHeader />
          </Route>
          <Route path='/admin/products' exact>
            <AdminHeader />
            <AdminProducts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
