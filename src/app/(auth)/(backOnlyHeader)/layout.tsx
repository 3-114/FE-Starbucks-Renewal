import LoginHeader from "@/components/layout/headers/LoginHeader"

export default function layout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
    <>
        <LoginHeader/>
        {children}
    </>
  )
}