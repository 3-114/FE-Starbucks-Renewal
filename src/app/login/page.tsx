import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoginUnderMenuData } from "@/data/LoginData"

export default function page() {
  return (
    <main className="px-7 flex flex-col gap-70">
      <section>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <Image
              width={62}
              height={62}
              src={"/"}
              alt={"starbucks_logo"}
            />
            <div className="w-full flex flex-col gap-3">
              <h1 className="font-semibold leading-normal tracking-tight text-xl whitespace-pre-wrap">
                안녕하세요.{"\n"}
                스타벅스입니다.
              </h1>
              <span className="font-medium leading-normal tracking-tighter text-sm text-[#717171]">회원 서비스 이용을 위해 로그인 해주세요.</span>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <form className="flex flex-col gap-6">
              <Input 
                  className=""
                  type="id"
                  placeholder="아이디" 
                />
                <Input 
                  className="" 
                  type="password"
                  placeholder="비밀번호" 
                />
            </form>
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
      <Button variant="login" size="login">
        <span className="text-white font-inter">로그인하기</span>
      </Button>
    </main>
  )
}
