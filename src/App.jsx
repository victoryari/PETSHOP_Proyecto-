import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductosDestacados from './components/ProductosDestacados';
import ServiciosDestacados from './components/ServiciosDestacados';
import Categorias from './components/Categorias';
import PorductosPage from './components/ProductosDestacados';
import ServiciosPage from './components/ServiciosDestacados';
import ListaProductos from './components/ListaProductos';
import Footer from './components/Footer';
import './index.css';
import ContactoPage from './pages/ContactoPage';

// Componente para la página de inicio (mantiene tu estructura actual)
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
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={<HomePage />} />
            
            {/* Ruta para la página de productos */}
            <Route path="/productos" element={<ProductosPage />} />
            
            {/* Puedes agregar más rutas aquí si necesitas */}
            <Route path="/servicios" element={<ServiciosPage />} />

            <Route path="/contactenos" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

//header


//banner

//contactenos


//categories


//footer