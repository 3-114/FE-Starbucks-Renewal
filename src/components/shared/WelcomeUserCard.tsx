import { WelcomeUserCardProps } from "@/types/Initial/InitialDataTypes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { DummyUserInfo } from "@/data/LoginData" 

export default function WelcomeUserCard({
    username = DummyUserInfo.username,
    avatarUrl = DummyUserInfo.avatarUrl,
    greeting = DummyUserInfo.greeting,
    message = DummyUserInfo.message,
  }: WelcomeUserCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <Avatar className="size-[62px]">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{username.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="w-full flex flex-col gap-3">
        <div className="font-semibold leading-normal tracking-tight text-xl">
            <h1>{greeting}</h1>
            <h1>{username}입니다.</h1>
        </div>
        <span className="font-medium leading-normal tracking-tighter text-sm text-[#717171]">
          {message}
        </span>
      </div>
    </div>
  )
}