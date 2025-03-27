import OnlyIconHeader from "@/components/layout/headers/OnlyIconHeader"
import { LoginHeaderData } from "@/data/HeaderData"

export default function layout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
    <>
        <OnlyIconHeader HeaderData={LoginHeaderData} />
        {children}
    </>
  )
}