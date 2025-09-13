import React from "react";
import producto1 from '../img/producto1.jpg';
import producto2 from '../img/producto2.jpg';
import producto3 from '../img/producto3.jpg';
import producto4 from '../img/producto4.jpg';

const ProductosDestacados = () => {
    // Función para formatear el precio
    const formatearPrecio = (precio) => {
        return `S/ ${precio.toFixed(2)}`;
    };

    // Datos de los productos con precios como números
    const productos = [
        {
            id: 1,  
            imagen: producto1,
            nombre: "Alimento Premium para Perros",
            descripcion: "Nutrición completa para todas las razas y tamaños.",
            precio: 49.99, // Cambiado a número
            enlace: "/productos/1"
        },
        {   
            id: 2,
            imagen: producto2,
            nombre: "Juguete Interactivo para Gatos",  
            descripcion: "Mantén a tu gato entretenido durante horas.",
            precio: 19.99, // Cambiado a número
            enlace: "/productos/2"
        }, 
        {   
            id: 3,
            imagen: producto3,
            nombre: "Cama Cómoda para Mascotas",
            descripcion: "El lugar perfecto para que tu mascota descanse.",
            precio: 39.99, // Cambiado a número
            enlace: "/productos/3"
        },
        {   
            id: 4,
            imagen: producto4,
            nombre: "Collar Ajustable para Perros",
            descripcion: "Duradero y cómodo, ideal para paseos diarios.",
            precio: 14.99, // Cambiado a número
            enlace: "/productos/4"
        }
    ];

    return (
        <section className="productos-destacados">
            <div className="container">
                <h2>Productos Destacados</h2>
                <div className="grid-productos">
                    {productos.map(producto => (
                        <a 
                            key={producto.id} 
                            href={producto.enlace} 
                            className="producto-link"
                        >
                            <div className="producto">
                                <div className="producto-img">
                                    <img 
                                        src={producto.imagen} 
                                        alt={producto.nombre}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="producto-info">
                                    <h3>{producto.nombre}</h3>
                                    <p>{producto.descripcion}</p>
                                    <div className="producto-precio">
                                        {formatearPrecio(producto.precio)} {/* Usando la función */}
                                    </div>
                                    <button className="btn-producto">Ver Producto</button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductosDestacados;