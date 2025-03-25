import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constant/index";
import { menu, close, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Memoize navLinks rendering to prevent unnecessary re-renders
  const desktopNav = useMemo(
    () =>
      navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      )),
    [active]
  );

  const mobileNav = useMemo(
    () =>
      navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? "text-white" : "text-secondary"
            } font-mono font-medium cursor-pointer text-[16px] hover:underline`}
          onClick={() => {
            setActive(link.title);
            setToggle(false); // Close menu on link click
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      )),
    [active]
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Title */}
        <Link
          to="/"
          className="flex items-center gap-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-9 h-9 object-contain"
            loading="lazy" // Lazy load logo
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center gap-1">
            <span className="text-[#7ab94af8]">Himanshu</span>
            <span className="hidden sm:inline">The Knight</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">{desktopNav}</ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "Close menu" : "Open menu"}
            className="w-6 h-6 object-contain cursor-pointer z-20"
            onClick={() => setToggle((prev) => !prev)}
            loading="lazy" // Lazy load icons
          />
          <div
            className={`${toggle ? "flex" : "hidden"
              } p-4 black-gradient absolute top-12 right-4 mx-2 my-2 min-w-[140px] z-10 rounded-xl shadow-lg transition-all duration-300 ease-in-out`}
          >
            <ul className="list-none flex flex-col gap-4">{mobileNav}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;