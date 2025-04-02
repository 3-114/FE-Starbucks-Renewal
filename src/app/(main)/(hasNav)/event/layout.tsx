import { Suspense } from "react"

import EventNav from "@/components/layout/navs/EventNav"
import { getEventNavData } from "@/actions/event-service/nav"

export default async function layout({children}: Readonly<{children: React.ReactNode}>) {

  const EventNavData = await getEventNavData()

  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <EventNav NavData={EventNavData} />
      </Suspense>
      {children}
    </>
  )
}
