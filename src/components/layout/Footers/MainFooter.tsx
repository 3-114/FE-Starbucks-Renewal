import Image from "next/image";

import NomalSeparator from "@/components/separator/NomalSeparator";
import { MainFooterType } from "@/types/FooterDataTypes";

export default async function Footer({FooterData}: {FooterData: MainFooterType}) {
  return (
    <footer className="w-full flex flex-col items-center gap-[10px]">
        <section className="w-full flex justify-center px-6 py-5 bg-[#F2F2F2]">
            <NomalSeparator data={FooterData.terms} className="text-[11px] text-[#808080] font-normal tracking-tighter leading-4 whitespace-nowrap"/>
        </section>
        <section className="w-full flex flex-col items-center px-3">
          <div className="w-full flex items-start">
            <Image
              src={FooterData.logoUrl}
              height={26}
              width={108}
              alt="starbucks_logo"
            />
          </div>
          <p className="font-[DroidSans] text-[9px] text-[#999999] font-normal leading-4 tracking-[-0.02em]">{FooterData.copyright}</p>
        </section>
    </footer>
  );
}
