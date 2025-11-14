// import { PersonStanding } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="flex items-center justify-between py-8 fixed top-0 left-0 right-0 w-full px-6 bg-linear-to-b from-white to-[rgba(140,148,172,0)]">
//       <Link to={"/"} className="flex gap-x-1 items-center">
//         <PersonStanding />
//         <span className="font-bold text-lg">MindStack</span>
//       </Link>

//       <div className="flex gap-x-6 text-sm">
//               <Link to={"discover"}>Discover</Link>
//         <Link to={"categories"}>Categories</Link>
//         <Link to={"developer"}>About Developer</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { PersonStanding, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between py-8 fixed top-0 left-0 right-0 w-full px-6 bg-linear-to-b from-white to-[rgba(140,148,172,0)] z-50">
      <Link to={"/"} className="flex gap-x-1 items-center">
        <PersonStanding />
        <span className="font-bold text-lg">MindStack</span>
      </Link>

      <div className="hidden md:flex gap-x-6 text-sm">
        <Link to={"/discover"}>Discover</Link>
        <Link to={"/categories"}>Categories</Link>
        <Link to={"/developer"}>About Developer</Link>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0  z-30 md:hidden" onClick={closeMenu} />
      )}

      <div
        className={`fixed top-15 right-0 h-full w-full bg-white  transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-y-6 pt-24 px-6 text-base">
          <Link
            to={"/discover"}
            onClick={closeMenu}
            className="hover:text-gray-600 transition-colors"
          >
            Discover
          </Link>
          <Link
            to={"/categories"}
            onClick={closeMenu}
            className="hover:text-gray-600 transition-colors"
          >
            Categories
          </Link>
          <Link
            to={"/developer"}
            onClick={closeMenu}
            className="hover:text-gray-600 transition-colors"
          >
            About Developer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
