import React from 'react';
import ListaProductos from '../components/ListaProductos';

const ProductosPage = () => {
    return (
        <div className="productos-page">
            <div className="container">
                <ListaProductos />
            </div>
        </div>
    );
};

export default ProductosPage;