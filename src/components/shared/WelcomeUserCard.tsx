import { WelcomeUserCardProps } from "@/types/Initial/InitialDataTypes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { DummyUserInfo } from "@/data/LoginData" 

export default function WelcomeUserCard({
    avatarname = DummyUserInfo.avatarname,
    avatarUrl = DummyUserInfo.avatarUrl,
    greeting = DummyUserInfo.greeting,
    message = DummyUserInfo.message,
  }: WelcomeUserCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <Avatar className="size-[62px]">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{avatarname?.charAt(0) ?? ''}</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col gap-3">
        <div className="font-semibold tracking-tighter text-[22px] gap-[10px]">
            <h1>{greeting}</h1>
            <h1>{avatarname}입니다.</h1>
        </div>
        <span className="font-[Inter] text-sm font-medium tracking-tighter leading-normal text-[#717171]">
          {message}
        </span>
      </div>
    </div>
  )
}