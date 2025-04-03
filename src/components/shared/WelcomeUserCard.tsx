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
      <section className="space-y-4 pt-15 pb-10">
        <Avatar className="size-[5rem]">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarname?.charAt(0) ?? ''}</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold">
          {greeting}
          <br />
          {avatarname}입니다.
        </h1>
        <p className="text-md font-medium tracking-tighter leading-normal text-[#717171]">
          {message}
        </p>
      </section>
    );
  }