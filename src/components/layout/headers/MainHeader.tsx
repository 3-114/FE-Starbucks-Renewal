import { MainHeaderData } from "@/data/HeaderData"

export default function MainHeader() {
    return (
      <header>
          <nav className="w-full px-3 py-4">
          <ul className="w-full grid grid-cols-3 items-center">
            <li className="justify-self-start">
              <MainHeaderData.hamburgericon 
                className="w-6 h-6 text-gray-700 cursor-pointer" 
              />
            </li>
            <li className="font-semibold text-sm justify-self-center">
              {MainHeaderData.title}
            </li>
            <li className="flex items-center space-x-4 justify-self-end">
              <MainHeaderData.searchicon 
                className="w-6 h-6 text-gray-700 cursor-pointer" 
              />
              <MainHeaderData.carticon 
                className="w-6 h-6 text-gray-700 cursor-pointer" 
              />
              <MainHeaderData.xicon 
                className="w-6 h-6 text-gray-700 cursor-pointer" 
              />
            </li>
          </ul>
          </nav>
      </header>
    )
  }