import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  console.log("navbar renderedx");
  return (
    <header className="p-4 bg-gray-100 text-gray-800 m-10 ">
      <div className="container flex justify-between h-16 mx-auto">
        <Logo />
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-sky-600 border-sky-600"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Link
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to={"/signin"} className="self-center px-8 py-3 rounded">
            Sign in
          </Link>
          <Link
            to={"/signup"}
            className="self-center px-8 py-3 font-semibold rounded bg-sky-600 text-gray-50"
          >
            Sign up
          </Link>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
