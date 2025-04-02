import NomalSeparator from "@/components/separator/NomalSeparator";
import { MainFooterType, TermsMeta } from "@/types/FooterDataTypes";

export default async function Footer({FooterData}: {FooterData: MainFooterType}) {
  return (
    <footer className="w-full flex items-center">
        <div className="w-full justify-center px-6 py-5 bg-[#CDCDCD]">
            <NomalSeparator />
        </div>
    </footer>
  );
}
