import React from 'react';
import Banner from '../components/Banner';
import Categorias from '../components/Categorias';
import ProductosDestacados from '../components/ProductosDestacados';
import ServiciosDestacados from '../components/ServiciosDestacados';


const Home = () => {
    return (
        <div className="home-page">
            <Banner />
            <Categorias />
            <ProductosDestacados />
            <ServiciosDestacados />
        </div>
    );
};

export default Home;