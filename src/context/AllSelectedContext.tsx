'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface AllSelectedContextType {
  allSelected: boolean;
  setAllSelected: (value: boolean) => void;
}

const AllSelectedContext = createContext<AllSelectedContextType | null>(null);

export function AllSelected({ children }: { children: ReactNode }) {
  const [allSelected, setAllSelected] = useState(false);

  return (
    <AllSelectedContext value={{ allSelected, setAllSelected }}>
      {children}
    </AllSelectedContext>
  );
}

export function useAllSelected() {
  const context = useContext(AllSelectedContext);
  if (!context) {
    throw new Error('useAllSelected must be used within <AllSelected>');
  }
  return context;
}
