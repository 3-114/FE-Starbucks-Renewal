import { Button } from "@/components/ui/button"

import WelcomeUserCard from "@/components/shared/WelcomeUserCard"
import LoginForm from "@/components/form/LoginForm"
import NomalSeparator from "@/components/separator/NomalSeparator"

import { login } from "@/actions/login-service/login/index"

export default function page() {
  return (
    <main className="font-inter flex-grow grid grid-rows-12 px-7">
      <section className="row-start-3 row-span-3">
        <WelcomeUserCard />
      </section>
      <section className="row-start-7 row-span-6 flex flex-col gap-7">
        <form action={login} className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-7">
            <LoginForm />
            <ul className="text-[12px] text-black text-center w-full gap-x-2">
              <NomalSeparator />
            </ul>
          </div>
          <div className="mt-auto pb-6">
            <Button type="submit" variant="largetpye" size="lg" className="w-full">
              로그인하기
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}