import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="flex flex-col">
      디자인
      <Button variant="default" size="default"> 디폴트 버튼</Button>
      <Button variant="destructive" size="default"> destructive 버튼</Button>
      <Button variant="outline" size="default"> outline 버튼</Button>
      <Button variant="secondary" size="default"> secondary 버튼</Button>
      <Button variant="ghost" size="default"> ghost 버튼</Button>
      <Button variant="link" size="default"> link 버튼</Button>
      사이즈
      <Button variant="default" size="default"> 디폴트 버튼</Button>
      <Button variant="default" size="sm"> sm 버튼</Button>
      <Button variant="default" size="lg"> lg 버튼</Button>
      <Button variant="default" size="icon"> icon 버튼</Button>
    </div>
  )
}
