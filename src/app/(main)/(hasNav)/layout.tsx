import MainNav from '@/components/layout/navs/MainNav'

import { MainNavData } from '@/data/NavData'

export default async function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <MainNav NavData={MainNavData}/>
      {children}
    </>
  )
}
