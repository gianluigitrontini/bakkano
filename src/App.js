import Header from './components/Global/Header';
import HeroSection from './components/Sections/HeroSection';
import BaseSection from './components/Sections/BaseSection';
import PercheScegliereNoiSection from './components/Sections/PercheScegliereNoiSection';
import ProductsSection from './components/Sections/Products/ProductsSection';
import { Switch, Route } from 'react-router-dom';
import AdminProducts from './components/views/AdminProducts';
import AdminHeader from './components/Admin/Header';
import Footer from './components/Global/Footer';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Header />
          <HeroSection />
          <BaseSection />
          <PercheScegliereNoiSection />
          <ProductsSection />
          <Footer />
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
