import React, { useState } from 'react';

const ListaPedidos = ({ pedidos, onActualizarEstado }) => {
  const [filtroEstado, setFiltroEstado] = useState('todos');

  const estados = [
    { id: 'todos', nombre: 'Todos los pedidos' },
    { id: 'pendiente', nombre: 'Pendientes' },
    { id: 'confirmado', nombre: 'Confirmados' },
    { id: 'en_camino', nombre: 'En camino' },
    { id: 'entregado', nombre: 'Entregados' },
    { id: 'cancelado', nombre: 'Cancelados' }
  ];

  const pedidosFiltrados = filtroEstado === 'todos' 
    ? pedidos 
    : pedidos.filter(pedido => pedido.estado === filtroEstado);

  const formatearPrecio = (precio) => {
    return `S/ ${precio.toFixed(2)}`;
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const cambiarEstado = (pedidoId, nuevoEstado) => {
    onActualizarEstado(pedidoId, nuevoEstado);
  };

  return (
    <div className="lista-pedidos">
      <div className="container">
        <h2>Gestión de Pedidos</h2>
        
        <div className="filtros-pedidos">
          {estados.map(estado => (
            <button
              key={estado.id}
              className={`filtro-btn ${filtroEstado === estado.id ? 'active' : ''}`}
              onClick={() => setFiltroEstado(estado.id)}
            >
              {estado.nombre}
            </button>
          ))}
        </div>
        
        {pedidosFiltrados.length === 0 ? (
          <p className="sin-pedidos">No hay pedidos {filtroEstado !== 'todos' ? `con estado "${filtroEstado}"` : ''}.</p>
        ) : (
          <div className="grid-pedidos">
            {pedidosFiltrados.map(pedido => (
              <div key={pedido.id} className={`pedido-card pedido-${pedido.estado}`}>
                <div className="pedido-header">
                  <h3>Pedido #{pedido.id.toString().slice(-6)}</h3>
                  <span className={`estado-badge estado-${pedido.estado}`}>
                    {pedido.estado.replace('_', ' ')}
                  </span>
                </div>
                
                <div className="pedido-info">
                  <div className="info-cliente">
                    <h4>Cliente</h4>
                    <p><strong>Nombre:</strong> {pedido.cliente.nombre}</p>
                    <p><strong>Email:</strong> {pedido.cliente.email}</p>
                    <p><strong>Teléfono:</strong> {pedido.cliente.telefono}</p>
                    <p><strong>Dirección:</strong> {pedido.cliente.direccion}</p>
                    <p><strong>Fecha entrega:</strong> {formatearFecha(pedido.cliente.fechaEntrega)}</p>
                    {pedido.cliente.notas && (
                      <p><strong>Notas:</strong> {pedido.cliente.notas}</p>
                    )}
                  </div>
                  
                  <div className="info-productos">
                    <h4>Productos</h4>
                    {pedido.productos.map(producto => (
                      <div key={producto.id} className="producto-pedido">
                        <span>{producto.nombre} x {producto.cantidad}</span>
                        <span>{formatearPrecio(producto.precio * producto.cantidad)}</span>
                      </div>
                    ))}
                    <div className="total-pedido">
                      <strong>Total: {formatearPrecio(pedido.total)}</strong>
                    </div>
                  </div>
                </div>
                
                <div className="pedido-fecha">
                  <small>Realizado el: {formatearFecha(pedido.fecha)}</small>
                </div>
                
                <div className="pedido-acciones">
                  <label>Cambiar estado:</label>
                  <select 
                    value={pedido.estado} 
                    onChange={(e) => cambiarEstado(pedido.id, e.target.value)}
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="confirmado">Confirmado</option>
                    <option value="en_camino">En camino</option>
                    <option value="entregado">Entregado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaPedidos;