import Link from "next/link";
import { SeparatorTypes } from "@/types/Initial/InitialDataTypes";

export default function NomalSeparator({ data, className = "" }: {data: SeparatorTypes[], className: string}) {
  return (
    <div className={className}>
      {data.map((item, index) => (
        <span key={item.id}>
          <Link href={item.Link} className="hover:underline">
            {item.title}
          </Link>
          {index !== data.length - 1 && (
            <span className="text-gray-400 px-2">|</span>
          )}
        </span>
      ))}
    </div>
  );
}