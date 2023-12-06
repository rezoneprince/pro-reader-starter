import { Square3Stack3DIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex lg:justify-between bg-slate-200">
      <div className="btn btn-ghost normal-case font-bold text-2xl">
        <Square3Stack3DIcon className="h-6 w-6 text-blue-500" />
        proReader
      </div>
      <div onClick={() => setOpen(!open)} className="md:hidden mt-4 flex justify-between">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-black-500 md:none" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black-500 md:none" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex relative md:static duration-1000 mt-2 px-2 ${
          open ? "top-24" : "-top-36"
        }`}
      >
        <li>
          <Link className="px-2" to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link className="px-2" to="/Books">
            Books
          </Link>
        </li>
        <li>
          <Link className="px-2" to="/About">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
