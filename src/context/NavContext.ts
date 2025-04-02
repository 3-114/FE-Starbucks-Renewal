'use client'
import { NavItem } from '@/types/ResponseDataTypes';
import { createContext, useContext } from 'react'

export const NavContext = createContext<NavItem[] | null>(null)
export const useEventNav = () => {
    const context = useContext(NavContext)
    if (!context) throw new Error('EventNavProvider로 감싸지 않았습니다.')
    return context
  }