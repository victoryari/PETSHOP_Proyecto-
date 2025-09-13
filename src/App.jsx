// App.jsx (actualizado)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductosDestacados from './components/ProductosDestacados';
import ServiciosDestacados from './components/ServiciosDestacados';
import Categorias from './components/Categorias';
import ListaProductos from './components/ListaProductos';
import Footer from './components/Footer';
import ContactoPage from './pages/ContactoPage';
import CarritoPage from './pages/CarritoPage';
import './index.css';

// Componente para la página de inicio
const HomePage = () => (
  <>
    <Banner />
    <Categorias />
    <ProductosDestacados />
    <ServiciosDestacados />
  </>
);

// Componente para la página de productos
const ProductosPage = () => (
  <div className="productos-page">
    <div className="container">
      <ListaProductos />
    </div>
  </div>
);

const App = () => {
  return (
    <CarritoProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/servicios" element={<ServiciosDestacados />} />
              <Route path="/contactenos" element={<ContactoPage />} />
              <Route path="/carrito" element={<CarritoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CarritoProvider>
  );
};

export default App;