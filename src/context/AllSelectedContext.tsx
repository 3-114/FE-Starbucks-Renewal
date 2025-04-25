'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type OriginType = 'manual' | 'derived';

interface AllSelectedContextType {
  allSelected: boolean;
  origin: OriginType;
  setAllSelected: (value: boolean, origin: OriginType) => void;
}

const AllSelectedContext = createContext<AllSelectedContextType | null>(null);

export function AllSelected({ children }: { children: ReactNode }) {
  const [allSelected, setAllSelectedValue] = useState(false);
  const [origin, setOrigin] = useState<OriginType>('derived');

  const setAllSelected = (value: boolean, triggerOrigin: OriginType) => {
    setAllSelectedValue(value);
    setOrigin(triggerOrigin);
  };

  console.log('🔍 현재 allSelected 상태:', allSelected, '| 출처:', origin);

  return (
    <AllSelectedContext.Provider
      value={{ allSelected, origin, setAllSelected }}
    >
      {children}
    </AllSelectedContext.Provider>
  );
}

export function useAllSelected() {
  const context = useContext(AllSelectedContext);
  if (!context) {
    throw new Error('useAllSelected must be used within <AllSelected>');
  }
  return context;
}
