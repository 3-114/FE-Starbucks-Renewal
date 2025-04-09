'use client';
import { createContext, useContext } from 'react';
import { CartContextState } from '@/types/ResponseDataTypes';

export const CartContext = createContext<CartContextState | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('CartProvider로 감싸지 않았습니다.');
  }
  return context;
};
