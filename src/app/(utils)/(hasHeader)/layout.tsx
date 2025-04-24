import { SidebarContextProvider } from '@/context/SideBarContext';
import { Sidebar } from '@/components/util/SideBar';

import MainHeader from '@/components/layout/headers/MainHeader';
import MainFooter from '@/components/layout/Footers/MainFooter';

import { MainHeaderData } from '@/data/HeaderData';
import { MainFooterDummyData } from '@/data/FooterData';

export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarContextProvider>
      <Sidebar />
      <MainHeader HeaderData={MainHeaderData} title="장바구니" />
      {children}
      <MainFooter FooterData={MainFooterDummyData} className="pb-40" />
    </SidebarContextProvider>
  );
}
