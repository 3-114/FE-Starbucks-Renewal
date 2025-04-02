import { Input } from "@/components/ui/input"

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
        <Input name="username" type="text" placeholder="아이디" variant="login" />
        <Input name="password" type="password" placeholder="비밀번호" variant="login" />
    </div>
  )
}
