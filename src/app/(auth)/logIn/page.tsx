import Link from "next/link"
import { Button } from "@/components/ui/button"

import WelcomeUserCard from "@/components/shared/WelcomeUserCard"
import { LoginUnderMenuData } from "@/data/LoginData"
import LoginForm from "@/components/form/LoginForm"


export default function page() {
  return (
    <main className="flex-grow grid grid-rows-12 px-7">
       <section className="row-start-3 row-span-3">
        <WelcomeUserCard />
      </section>
      <section className="row-start-7 row-span-3 flex flex-col gap-7">
        <LoginForm />
        <ul className="grid grid-cols-3 text-[12px] text-black text-center w-full">
          {LoginUnderMenuData.map((item, index) => (
            <li
              key={item.id}
              className={`${
                index !== LoginUnderMenuData.length - 1 ? 'border-r border-gray-300' : ''
              }`}
            >
              <Link href={item.Link} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
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