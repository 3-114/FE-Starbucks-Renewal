import Link from 'next/link'
import { X as LucideX } from 'lucide-react'

export default function X() {
  return (
    <Link href="/search" className="cursor-pointer">
      <LucideX className="w-6 h-6 text-gray-700" />
    </Link>
  )
}