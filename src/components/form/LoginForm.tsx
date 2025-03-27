import { Input } from "@/components/ui/input"

export default function LoginForm() {
  return (
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
  )
}
