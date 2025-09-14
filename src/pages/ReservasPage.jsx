import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import FormularioPedido from '../components/FormularioPedido';
import ListaPedidos from '../components/ListaPedidos';

const ReservasPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [vistaActiva, setVistaActiva] = useState('menu'); // 'menu', 'formulario', 'pedidos'

  // Cargar pedidos desde localStorage al inicializar
  useEffect(() => {
    const pedidosGuardados = localStorage.getItem('pedidos');
    if (pedidosGuardados) {
      setPedidos(JSON.parse(pedidosGuardados));
    }
  }, []);

  // Guardar pedidos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  const handleNuevoPedido = (pedido) => {
    setPedidos(prev => [pedido, ...prev]);
    setVistaActiva('pedidos');
    alert('¡Pedido realizado con éxito!');
  };

  const handleActualizarEstado = (pedidoId, nuevoEstado) => {
    setPedidos(prev =>
      prev.map(pedido =>
        pedido.id === pedidoId
          ? { ...pedido, estado: nuevoEstado }
          : pedido
      )
    );
  };

  return (
    <div className="reservas-page">
      <div className="container">
        <div className="navegacion-reservas">
          <button 
            className={`nav-btn ${vistaActiva === 'menu' ? 'active' : ''}`}
            onClick={() => setVistaActiva('menu')}
          >
            Menú
          </button>
          <button 
            className={`nav-btn ${vistaActiva === 'formulario' ? 'active' : ''}`}
            onClick={() => setVistaActiva('formulario')}
          >
            Realizar Pedido
          </button>
          <button 
            className={`nav-btn ${vistaActiva === 'pedidos' ? 'active' : ''}`}
            onClick={() => setVistaActiva('pedidos')}
          >
            Mis Pedidos
          </button>
        </div>

        {vistaActiva === 'menu' && <Menu />}
        {vistaActiva === 'formulario' && (
          <FormularioPedido onSubmit={handleNuevoPedido} />
        )}
        {vistaActiva === 'pedidos' && (
          <ListaPedidos 
            pedidos={pedidos} 
            onActualizarEstado={handleActualizarEstado}
          />
        )}
      </div>
    </div>
  );
};

export default ReservasPage;