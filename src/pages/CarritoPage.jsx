// CarritoPage.jsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const CarritoPage = () => {
  const { carrito, eliminarProducto, actualizarCantidad, vaciarCarrito, total } = useCarrito();

  const handleCambiarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarProducto(id);
    } else {
      actualizarCantidad(id, nuevaCantidad);
    }
  };

  const formatearPrecio = (precio) => {
    return `S/ ${precio.toFixed(2)}`;
  };

  if (carrito.length === 0) {
    return (
      <div className="carrito-page">
        <div className="container">
          <h2>Carrito de Compras</h2>
          <div className="carrito-vacio">
            <p>Tu carrito está vacío</p>
            <Link to="/productos" className="btn btn-primary">
              Ir a Productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-page">
      <div className="container">
        <h2>Carrito de Compras</h2>
        
        <div className="carrito-contenido">
          <div className="carrito-items">
            {carrito.map(item => (
              <div key={item.id} className="carrito-item">
                <div className="item-imagen">
                  <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="item-info">
                  <h4>{item.nombre}</h4>
                  <p>{item.descripcion}</p>
                </div>
                <div className="item-precio">
                  {formatearPrecio(item.precio)}
                </div>
                <div className="item-cantidad">
                  <button 
                    onClick={() => handleCambiarCantidad(item.id, item.cantidad - 1)}
                  >-</button>
                  <span>{item.cantidad}</span>
                  <button 
                    onClick={() => handleCambiarCantidad(item.id, item.cantidad + 1)}
                  >+</button>
                </div>
                <div className="item-subtotal">
                  {formatearPrecio(item.precio * item.cantidad)}
                </div>
                <button 
                  className="item-eliminar"
                  onClick={() => eliminarProducto(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <h3>Resumen de Compra</h3>
            <div className="resumen-linea">
              <span>Subtotal:</span>
              <span>{formatearPrecio(total)}</span>
            </div>
            <div className="resumen-linea">
              <span>Envío:</span>
              <span>Gratis</span>
            </div>
            <div className="resumen-linea total">
              <span>Total:</span>
              <span>{formatearPrecio(total)}</span>
            </div>
            <button className="btn btn-primary btn-block">
              Proceder al Pago
            </button>
            <button 
              className="btn btn-secondary btn-block"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </button>
            <Link to="/productos" className="btn btn-link btn-block">
              Seguir Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoPage;