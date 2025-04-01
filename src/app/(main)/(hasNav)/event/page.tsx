import EventNav from "@/components/layout/navs/EventNav"
import { EventNavData } from "@/data/NavData"

export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = searchParams.category ?? EventNavData[0].title


  return (
    <>
      <EventNav NavData={EventNavData} />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">{category}</h1>
      </div>
    </>
  )
}
