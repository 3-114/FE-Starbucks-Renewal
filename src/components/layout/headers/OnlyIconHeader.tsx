import { GnbType } from '@/types/Initial/InitialDataTypes';
import { LoginHeaderData, IdentificationHeaderData } from '@/data/HeaderData';

const headerDataMap: Record<string, GnbType[]> = {
  login: LoginHeaderData,
  identification: IdentificationHeaderData,
  // 추후 회원가입, 대시보드 등 추가 가능
};

export default function OnlyIconHeader({
  type,
}: {
  type: keyof typeof headerDataMap;
}) {
  const HeaderData = headerDataMap[type];

  return (
    <header>
      <nav className="w-full px-3 py-4">
        <ul className="w-full flex justify-between items-center">
          {HeaderData.map((menu: GnbType) => (
            <li key={menu.id}>
              <menu.icon />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
