import { NavLink } from "react-router"

type Props = {}

function HeaderApi({}: Props) {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-400 text-white">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/"
        
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          API'S
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className="hidden w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 bg-blue-600 md:bg-transparent">
          <li>
            <NavLink
              to=''
              className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300"
              aria-current="page"
              end
            >
              Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink
              to='store'
              className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300"
              end
            >
              Store 
            </NavLink>
          </li>
          <li>
            <NavLink 
            to='ricky'
            className="block py-2 px-3 text-white rounded hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300"
            end>
              Ricky And Morty
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default HeaderApi