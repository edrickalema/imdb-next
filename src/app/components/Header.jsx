import React from "react";
import MenuItem from "./MenuItem";
import { IoHome } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto p-3  items-center">
      <div className="flex gap-6">
        <MenuItem address="/" title="Home" icon={<IoHome />} />
        <MenuItem address="/about" title="About" icon={<FaInfo />} />
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Link href="/" className="flex gap-2 items-center">
          <span className="text-2xl bg-amber-500 font-bold rounded p-2">
            imdb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
