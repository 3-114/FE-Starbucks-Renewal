import Link from "next/link"
import { Button, } from "@/components/ui/button"

import WelcomeUserCard from "@/components/shared/WelcomeUserCard"

import { LoginUnderMenuData } from "@/data/LoginData"


import LoginForm from "@/components/form/LoginForm"

export default function page() {
  return (
    <main className="px-7 flex flex-col gap-70">
      <section>
        <div className="flex flex-col gap-14">
          <WelcomeUserCard />
          <div className="flex flex-col gap-7">
            <LoginForm />
            <ul className="flex items-center text-[12px] px-16 text-black ">
                {LoginUnderMenuData.map((item, index) => {
                  const isLastItem = index === LoginUnderMenuData.length - 1;
                  return (
                    <li
                      key={item.id}
                      className={`${
                        index === 0 ? 'pr-4' : 'px-4'
                      } ${!isLastItem ? 'border-r border-gray-300' : ''}`}
                    >
                      <Link href={item.Link} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
          </div>
        </div>
      </section>
      <Button variant="largetpye" size="detailedproduct"> 구매하기 </Button>
    </main>
  )
}
