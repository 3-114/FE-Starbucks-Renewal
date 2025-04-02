'use client'

import { NavContext } from '@/context/NavContext'
import { NavItem } from '@/types/ResponseDataTypes'

type Props = {
  navData: NavItem[]
  children: React.ReactNode
}

export const EventNavProvider = ({ navData, children }: Props) => {
  return (
    <NavContext.Provider value={navData}>
      {children}
    </NavContext.Provider>
  )
}

export default EventNavProvider
