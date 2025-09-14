// App.jsx (actualizado)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Layout from './components/Layout';
import Home from './pages/home';
import ProductosPage from './pages/ProductosPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import CarritoPage from './pages/CarritoPage';
import ReservasPage from './pages/ReservasPage';
import './index.css';

const App = () => {
  return (
    <CarritoProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/contactenos" element={<ContactoPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/reservas" element={<ReservasPage />} />
          </Routes>
        </Layout>
      </Router>
    </CarritoProvider>
  );
};

export default App;