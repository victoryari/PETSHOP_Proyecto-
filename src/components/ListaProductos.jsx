import React, { useState } from 'react';

const ListaProductos = () => {
    // Estado inicial con algunos productos de ejemplo
    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: "Alimento Premium para Perros",
            precio: 49.99,
            descripcion: "Nutrición completa para todas las razas"
        },
        {
            id: 2,
            nombre: "Juguete Interactivo para Gatos",
            precio: 19.99,
            descripcion: "Mantén a tu gato entretenido"
        }
    ]);

    // Productos adicionales para agregar
    const productosAdicionales = [
        {
            id: 3,
            nombre: "Cama Cómoda para Mascotas",
            precio: 39.99,
            descripcion: "Lugar perfecto para descansar"
        },
        {
            id: 4,
            nombre: "Collar Ajustable para Perros",
            precio: 14.99,
            descripcion: "Duradero y cómodo"
        },
        {
            id: 5,
            nombre: "Arena Sanitaria para Gatos",
            precio: 24.99,
            descripcion: "Absorbente y con control de olores"
        }
    ];

    // Función para agregar productos
    const agregarProductos = () => {
        setProductos(prevProductos => {
            // Filtrar productos que ya no están en la lista
            const nuevosProductos = productosAdicionales.filter(
                producto => !prevProductos.some(p => p.id === producto.id)
            );
            
            // Si ya están todos los productos, no agregar más
            if (nuevosProductos.length === 0) {
                alert("¡Todos los productos ya han sido agregados!");
                return prevProductos;
            }
            
            // Agregar solo los productos que no están en la lista
            return [...prevProductos, ...nuevosProductos.slice(0, 2)]; // Agrega 2 productos
        });
    };

    // Función para formatear el precio
    const formatearPrecio = (precio) => {
        return `S/ ${precio.toFixed(2)}`;
    };

    return (
        <div className="lista-productos">
            <h2>Lista de Productos</h2>
            
            <button onClick={agregarProductos} className="btn-agregar">
                Agregar Más Productos
            </button>

            {productos.length === 0 ? (
                <p className="sin-productos">No hay productos disponibles.</p>
            ) : (
                <div className="grid-productos">
                    {productos.map(producto => (
                        <div key={producto.id} className="producto-card">
                            <h3 className="producto-nombre">{producto.nombre}</h3>
                            <p className="producto-descripcion">{producto.descripcion}</p>
                            <p className="producto-precio">{formatearPrecio(producto.precio)}</p>
                            <div className="producto-acciones">
                                <button className="btn-comprar">Agregar al Carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="productos-info">
                <p>Total de productos: {productos.length}</p>
            </div>
        </div>
    );
};

export default ListaProductos;