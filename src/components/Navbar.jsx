import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { mylogo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div className=" mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={mylogo} alt="logo" className=" h-9 w-9 object-contain" />
          <p className=" flex cursor-pointer text-[18px] font-bold text-white">
            Mohamed&nbsp;
            <span className=" hidden sm:block">| Software Engineer</span>
          </p>
        </Link>
        <ul className=" hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(link.title)}
              aria-hidden="true"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" h-[28px] w-[20px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
            aria-hidden="true"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient min-w[140px] absolute right-0 top-20 z-10 mx-4 my-2 rounded-xl p-6`}
          >
            <ul className=" flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins cursor-pointer text-[16px] font-medium `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  aria-hidden="true"
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
