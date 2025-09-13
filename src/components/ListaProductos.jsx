// ListaProductos.jsx (actualizado)
import React, { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import producto1 from '../img/producto1.png';
import producto2 from '../img/producto2.png';
import producto3 from '../img/producto3.png';
import producto4 from '../img/producto4.png';
import producto5 from '../img/producto5.png';
import producto6 from '../img/producto6.png';
import producto7 from '../img/producto7.png';
import producto8 from '../img/producto8.png';
import producto9 from '../img/producto9.png';
import producto10 from '../img/producto10.png';

const ListaProductos = () => {
  const { agregarProducto } = useCarrito();
  
  // Estado inicial con 10 productos
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Alimento Premium para Perros",
      precio: 49.99,
      descripcion: "Nutrición completa para todas las razas",
      imagen: producto1
    },
    {
      id: 2,
      nombre: "Juguete Interactivo para Gatos",
      precio: 19.99,
      descripcion: "Mantén a tu gato entretenido",
      imagen: producto2
    },
    {
      id: 3,
      nombre: "Cama Cómoda para Mascotas",
      precio: 39.99,
      descripcion: "Lugar perfecto para descansar",
      imagen: producto3
    },
    {
      id: 4,
      nombre: "Collar Ajustable para Perros",
      precio: 14.99,
      descripcion: "Duradero y cómodo",
      imagen: producto4
    },
    {
      id: 5,
      nombre: "Arena Sanitaria para Gatos",
      precio: 24.99,
      descripcion: "Absorbente y con control de olores",
      imagen: producto5
    },
    {
      id: 6,
      nombre: "Correa Retráctil para Perros",
      precio: 29.99,
      descripcion: "Paseos más cómodos y seguros",
      imagen: producto6
    },
    {
      id: 7,
      nombre: "Comedero Automático",
      precio: 89.99,
      descripcion: "Controla las porciones de alimento",
      imagen: producto7
    },
    {
      id: 8,
      nombre: "Shampoo para Mascotas",
      precio: 12.99,
      descripcion: "Limpieza profunda y cuidado del pelaje",
      imagen: producto8
    },
    {
      id: 9,
      nombre: "Transportadora para Mascotas",
      precio: 59.99,
      descripcion: "Segura y cómoda para viajes",
      imagen: producto9
    },
    {
      id: 10,
      nombre: "Snacks Dentales para Perros",
      precio: 9.99,
      descripcion: "Cuidado dental y aliento fresco",
      imagen: producto10
    }
  ]);

  const formatearPrecio = (precio) => {
    return `S/ ${precio.toFixed(2)}`;
  };

  const handleAgregarCarrito = (producto) => {
    agregarProducto(producto);
    alert(`${producto.nombre} añadido al carrito!`);
  };

  return (
    <div className="lista-productos">
      <h2>Nuestros Productos</h2>
      
      {productos.length === 0 ? (
        <p className="sin-productos">No hay productos disponibles.</p>
      ) : (
        <div className="grid-productos">
          {productos.map(producto => (
            <div key={producto.id} className="producto-card">
              <div className="producto-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <p className="producto-precio">{formatearPrecio(producto.precio)}</p>
              <div className="producto-acciones">
                <button 
                  className="btn-comprar"
                  onClick={() => handleAgregarCarrito(producto)}
                >
                  Agregar al Carrito
                </button>
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