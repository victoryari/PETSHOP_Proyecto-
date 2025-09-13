// CarritoContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      const existe = state.find(item => item.id === action.producto.id);
      if (existe) {
        return state.map(item =>
          item.id === action.producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...state, { ...action.producto, cantidad: 1 }];
    
    case 'ELIMINAR_PRODUCTO':
      return state.filter(item => item.id !== action.id);
    
    case 'ACTUALIZAR_CANTIDAD':
      return state.map(item =>
        item.id === action.id
          ? { ...item, cantidad: action.cantidad }
          : item
      );
    
    case 'VACIAR_CARRITO':
      return [];
    
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [carrito, dispatch] = useReducer(carritoReducer, []);

  const agregarProducto = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
  };

  const eliminarProducto = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', id });
  };

  const actualizarCantidad = (id, cantidad) => {
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', id, cantidad });
  };

  const vaciarCarrito = () => {
    dispatch({ type: 'VACIAR_CARRITO' });
  };

  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarProducto,
      eliminarProducto,
      actualizarCantidad,
      vaciarCarrito,
      total
    }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
};