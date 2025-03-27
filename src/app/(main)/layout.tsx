import MainHeader from "@/components/layout/headers/MainHeader"
export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  )
}
