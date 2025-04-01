import { Input } from "@/components/ui/input"

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
        <Input type="text" placeholder="아이디" variant="login" />
        <Input type="password" placeholder="비밀번호" variant="login" />
    </form>
  )
}
