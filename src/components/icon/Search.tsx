import Link from 'next/link'
import { Search as LucideSearch } from 'lucide-react'

export default function AlignJstify() {
  return (
    <Link href="/search" className="cursor-pointer">
      <LucideSearch className="w-6 h-6 text-gray-700" />
    </Link>
  )
}