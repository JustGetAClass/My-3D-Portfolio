import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { mylogo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
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
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
