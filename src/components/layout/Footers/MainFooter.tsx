import NomalSeparator from "@/components/separator/NomalSeparator";
import { MainFooterType } from "@/types/FooterDataTypes";

export default async function Footer({FooterData}: {FooterData: MainFooterType}) {
  return (
    <footer className="w-full flex items-center">
        <div className="w-full flex justify-center px-6 py-5 bg-[#CDCDCD]">
            <NomalSeparator data={FooterData.terms} className="text-[11px] text-[#808080] font-normal tracking-tighter leading-4 whitespace-nowrap"/>
        </div>
    </footer>
  );
}
