"use client"

import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { EventNavMenuType } from "@/types/Initial/InitialDataTypes"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function EventNav({ NavData }: { NavData: EventNavMenuType[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const activeTitle = searchParams.get("category") ?? NavData[0]?.title

  const handleClick = (title: string) => {
    const query = new URLSearchParams(searchParams.toString())
    query.set("category", title)
    router.push(`?${query.toString()}`)
  }

  return (
    <Carousel opts={{ loop: false, align: "start", dragFree: true }} className="w-full">
      <CarouselContent>
        {NavData.map((item) => (
          <CarouselItem key={item.id} className="!basis-auto">
            <Button
              onClick={() => handleClick(item.title)}
              variant="navcarousel"
              size="navcarousel"
              color="transparent"
              className={cn(
                activeTitle === item.title
                  ? "text-[#01A862]"
                  : "text-[#838383]"
              )}
            >
              {item.title}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
