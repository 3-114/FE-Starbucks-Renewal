import Link from "next/link";
import { LoginUnderMenuData } from "@/data/LoginData";

export default function NomalSeparator() {
  return (
    <div className="flex justify-center text-[12px] text-black leading-0 font-semibold whitespace-nowrap">
      {LoginUnderMenuData.map((item, index) => (
        <span key={item.id} >
          <Link href={item.Link} className="hover:underline">
            {item.title}
          </Link>
          {index !== LoginUnderMenuData.length - 1 && (
            <span className="text-gray-400 px-2">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
