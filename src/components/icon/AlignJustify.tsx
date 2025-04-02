import Link from 'next/link'
import { AlignJustify as LucideAlignJustify } from 'lucide-react'

export default function AlignJstify() {
  return (
    <Link href="/sidemenu" className="cursor-pointer">
      <LucideAlignJustify className="w-6 h-6 text-gray-700" />
    </Link>
  )
}