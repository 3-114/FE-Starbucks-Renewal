import EventNav from "@/components/layout/navs/EventNav"
import { EventNavData } from "@/data/NavData"
import { Suspense } from "react"

export default async function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <EventNav NavData={EventNavData} />
      </Suspense>
      {children}
    </>
  )
}
