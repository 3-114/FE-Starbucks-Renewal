import { Suspense } from "react"

import EventNav from "@/components/layout/navs/EventNav"
import EventNavProvider from "@/provider/EventNavProvider"

import { getEventNavData } from "@/actions/event-service/nav"

export default async function layout({children}: Readonly<{children: React.ReactNode}>) {

  const data = await getEventNavData()

  return (
    <EventNavProvider navData={data}>
      <Suspense fallback={<div>로딩 중...</div>}>
        <EventNav NavData={data} />
      </Suspense>
      {children}
    </EventNavProvider>
  )
}
