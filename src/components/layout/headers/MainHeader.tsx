import { GnbType } from '@/types/Initial/InitialDataTypes';

export default async function MainHeader({
  HeaderData,
  title,
}: {
  HeaderData: GnbType[];
  title: string;
}) {
  return (
    <header className="w-full px-4 py-2 flex items-center">
      <nav className="w-full py-1 flex items-center relative">
        <ul className="flex items-center">
          {HeaderData?.slice(0, 1).map((menu) => (
            <li key={menu.id}>
              <menu.icon className="w-6 h-6 text-gray-700" />
            </li>
          ))}
        </ul>

        <h1 className="text-sm font-semibold absolute left-1/2 transform -translate-x-1/2 tracking-normal">
          {title}
        </h1>

        <ul className="flex items-center gap-[10px] ml-auto">
          {HeaderData?.slice(1).map((menu) => (
            <li key={menu.id}>
              <menu.icon className="w-6 h-6 m-1 text-gray-700" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
