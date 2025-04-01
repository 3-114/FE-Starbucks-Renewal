import MainHeader from '@/components/layout/headers/MainHeader'
import { MainHeaderData } from '@/data/HeaderData'

export default async function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <MainHeader HeaderData={MainHeaderData} title="온라인 스토어" />
      {children}
    </>
  )
}
