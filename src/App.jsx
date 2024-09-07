import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/home';
import Product from './views/product';
import injectContext from './store/appContext.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
