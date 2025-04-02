import Link from 'next/link';
import { LoginUnderMenuData } from '@/data/LoginData';

export default function NomalSeparator() {
  return (
    <ul className="flex justify-center text-[14px] text-black leading-0 font-semibold whitespace-nowrap py-6">
      {LoginUnderMenuData.map((item, index) => (
        <span key={item.id}>
          <Link href={item.Link} className="hover:underline">
            {item.title}
          </Link>
          {index !== LoginUnderMenuData.length - 1 && (
            <span className="text-gray-400 px-2">|</span>
          )}
        </span>
      ))}
    </ul>
  );
}
