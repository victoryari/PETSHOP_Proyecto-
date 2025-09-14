import React, { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';

const FormularioPedido = ({ onSubmit }) => {
  const { carrito, vaciarCarrito } = useCarrito();
  const [cliente, setCliente] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    fechaEntrega: '',
    notas: ''
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    
    if (!cliente.nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido';
    if (!cliente.email.trim()) nuevosErrores.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(cliente.email)) nuevosErrores.email = 'Email no válido';
    if (!cliente.telefono.trim()) nuevosErrores.telefono = 'El teléfono es requerido';
    if (!cliente.direccion.trim()) nuevosErrores.direccion = 'La dirección es requerida';
    if (!cliente.fechaEntrega) nuevosErrores.fechaEntrega = 'La fecha de entrega es requerida';
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      const pedido = {
        id: Date.now(),
        cliente,
        productos: carrito,
        fecha: new Date().toISOString(),
        estado: 'pendiente',
        total: carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
      };
      
      onSubmit(pedido);
      vaciarCarrito();
      
      // Resetear formulario
      setCliente({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        fechaEntrega: '',
        notas: ''
      });
    }
  };

  const formatearPrecio = (precio) => {
    return `S/ ${precio.toFixed(2)}`;
  };

  if (carrito.length === 0) {
    return (
      <div className="formulario-pedido">
        <div className="container">
          <h3>Realizar Pedido</h3>
          <p className="carrito-vacio">Tu carrito está vacío. Agrega productos para realizar un pedido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="formulario-pedido">
      <div className="container">
        <h3>Realizar Pedido</h3>
        
        <div className="pedido-contenido">
          <div className="resumen-pedido">
            <h4>Resumen de tu pedido</h4>
            {carrito.map(item => (
              <div key={item.id} className="item-resumen">
                <span>{item.nombre} x {item.cantidad}</span>
                <span>{formatearPrecio(item.precio * item.cantidad)}</span>
              </div>
            ))}
            <div className="total-resumen">
              <strong>Total: {formatearPrecio(carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0))}</strong>
            </div>
          </div>
          
          <form className="form-pedido" onSubmit={handleSubmit}>
            <h4>Información de entrega</h4>
            
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={cliente.nombre}
                onChange={handleChange}
                className={errores.nombre ? 'error-input' : ''}
              />
              {errores.nombre && <span className="error">{errores.nombre}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={cliente.email}
                onChange={handleChange}
                className={errores.email ? 'error-input' : ''}
              />
              {errores.email && <span className="error">{errores.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={cliente.telefono}
                onChange={handleChange}
                className={errores.telefono ? 'error-input' : ''}
              />
              {errores.telefono && <span className="error">{errores.telefono}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="direccion">Dirección de entrega *</label>
              <textarea
                id="direccion"
                name="direccion"
                value={cliente.direccion}
                onChange={handleChange}
                rows="3"
                className={errores.direccion ? 'error-input' : ''}
              ></textarea>
              {errores.direccion && <span className="error">{errores.direccion}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="fechaEntrega">Fecha de entrega *</label>
              <input
                type="date"
                id="fechaEntrega"
                name="fechaEntrega"
                value={cliente.fechaEntrega}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={errores.fechaEntrega ? 'error-input' : ''}
              />
              {errores.fechaEntrega && <span className="error">{errores.fechaEntrega}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="notas">Notas adicionales</label>
              <textarea
                id="notas"
                name="notas"
                value={cliente.notas}
                onChange={handleChange}
                rows="3"
                placeholder="Instrucciones especiales para la entrega..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Confirmar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioPedido;