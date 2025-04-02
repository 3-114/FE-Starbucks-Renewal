import { Button } from "@/components/ui/button"

import WelcomeUserCard from "@/components/shared/WelcomeUserCard"
import LoginForm from "@/components/form/LoginForm"
import NomalSeparator from "@/components/separator/NomalSeparator"


export default function page() {
  return (
    <main className="font-inter flex-grow grid grid-rows-12 px-7">
       <section className="row-start-3 row-span-3">
        <WelcomeUserCard />
      </section>
      <section className="row-start-7 row-span-3 flex flex-col gap-7">
        <LoginForm />
        <ul className="text-[12px] text-black text-center w-full gap-x-2">
          <NomalSeparator />
        </ul>
      </section>
      <div className="row-start-12 row-span-1 pb-6">
        <Button variant="largetpye" size="lg" className="w-full">
          로그인하기
        </Button>
      </div>
    </main>
  )
}