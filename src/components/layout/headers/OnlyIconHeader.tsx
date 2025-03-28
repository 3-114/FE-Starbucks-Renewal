import { GnbType } from "@/types/Initial/InitialDataTypes"

export default function OnlyIconHeader({HeaderData}: {HeaderData: GnbType[]}) {
  return (
    <header>
        <nav className="w-full px-3 py-4">
            <ul className="w-full flex justify-between items-center">
                {HeaderData.map((menu : GnbType) => (
                        <li key={menu.id}>
                            <menu.icon className="red" />
                        </li>
                    ))}
            </ul>
        </nav>
    </header>
  )
}
