import logo from './icon.png';
import dama from './damarys.jpg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// STATIC COMPONENTS
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// PUBLICS COMPONENTS
import WhoAre from './components/public/Whoare';
import Index from './components/Index';


// PRODUCTS COMPONENTS
import ShowProducts from './components/Product/ShowProducts';
import CreateProduct from './components/Product/CreateProduct';
import EditProduct from './components/Product/EditProduct';


const config = {
  title: "Alocraise Shop"
}




function App() {
  let logos = { logo, dama }
  return (
    <>
      <Navbar logos={logos} config={config} />
      <BrowserRouter>
        <Routes>
          <Route path="/show" element={<ShowProducts />} />
          <Route path="/edit/:id" element={<EditProduct/>} />
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/whoare" element={<WhoAre logos={logos} />} />
        </Routes>
      </BrowserRouter>
      <Footer config={config} />
    </>
  );
}

export default App;
