import OnlyIconHeader from '@/components/layout/headers/OnlyIconHeader';
import { IdentificationHeaderData } from '@/data/HeaderData';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <OnlyIconHeader HeaderData={IdentificationHeaderData} />
      {children}
    </>
  );
}
