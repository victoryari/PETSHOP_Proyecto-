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

const Menu = () => {
  const { agregarProducto } = useCarrito();
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  const productos = [
    {
      id: 1,
      nombre: "Alimento Premium para Perros",
      precio: 49.99,
      descripcion: "Nutrición completa para todas las razas",
      imagen: producto1,
      categoria: "alimentos"
    },
    {
      id: 2,
      nombre: "Juguete Interactivo para Gatos",
      precio: 19.99,
      descripcion: "Mantén a tu gato entretenido",
      imagen: producto2,
      categoria: "juguetes"
    },
    {
      id: 3,
      nombre: "Cama Cómoda para Mascotas",
      precio: 39.99,
      descripcion: "Lugar perfecto para descansar",
      imagen: producto3,
      categoria: "accesorios"
    },
    {
      id: 4,
      nombre: "Collar Ajustable para Perros",
      precio: 14.99,
      descripcion: "Duradero y cómodo",
      imagen: producto4,
      categoria: "accesorios"
    },
    {
      id: 5,
      nombre: "Arena Sanitaria para Gatos",
      precio: 24.99,
      descripcion: "Absorbente y con control de olores",
      imagen: producto5,
      categoria: "higiene"
    },
    {
      id: 6,
      nombre: "Correa Retráctil para Perros",
      precio: 29.99,
      descripcion: "Paseos más cómodos y seguros",
      imagen: producto6,
      categoria: "accesorios"
    },
    {
      id: 7,
      nombre: "Comedero Automático",
      precio: 89.99,
      descripcion: "Controla las porciones de alimento",
      imagen: producto7,
      categoria: "accesorios"
    },
    {
      id: 8,
      nombre: "Shampoo para Mascotas",
      precio: 12.99,
      descripcion: "Limpieza profunda y cuidado del pelaje",
      imagen: producto8,
      categoria: "higiene"
    },
    {
      id: 9,
      nombre: "Transportadora para Mascotas",
      precio: 59.99,
      descripcion: "Segura y cómoda para viajes",
      imagen: producto9,
      categoria: "accesorios"
    },
    {
      id: 10,
      nombre: "Snacks Dentales para Perros",
      precio: 9.99,
      descripcion: "Cuidado dental y aliento fresco",
      imagen: producto10,
      categoria: "alimentos"
    }
  ];

  const categorias = [
    { id: 'todos', nombre: 'Todos los productos' },
    { id: 'alimentos', nombre: 'Alimentos' },
    { id: 'juguetes', nombre: 'Juguetes' },
    { id: 'accesorios', nombre: 'Accesorios' },
    { id: 'higiene', nombre: 'Higiene' }
  ];

  const productosFiltrados = categoriaActiva === 'todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaActiva);

  const formatearPrecio = (precio) => {
    return `S/ ${precio.toFixed(2)}`;
  };

  const handleAgregarCarrito = (producto) => {
    agregarProducto(producto);
    alert(`${producto.nombre} añadido al carrito!`);
  };

  return (
    <div className="menu-page">
      <div className="container">
        <h2>Menú de Productos</h2>
        
        <div className="filtros-categorias">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              className={`filtro-btn ${categoriaActiva === categoria.id ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(categoria.id)}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>
        
        <div className="grid-productos">
          {productosFiltrados.map(producto => (
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
      </div>
    </div>
  );
};

export default Menu;