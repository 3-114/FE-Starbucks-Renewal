import { GnbType } from "@/types/InitialDataTypes"
import { LoginHeaderData } from "@/data/HeaderData"

export default function LoginHeader() {
  return (
    <header>
        <nav className="w-full px-3 py-4">
            <ul className="w-full flex justify-between items-center">
                {LoginHeaderData.map((menu : GnbType) => (
                        <li key={menu.id}>
                            <menu.icon className="red" />
                        </li>
                    ))}
            </ul>
        </nav>
    </header>
  )
}
