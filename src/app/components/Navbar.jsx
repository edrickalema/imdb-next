import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center gap-6 dark:bg-gray-700 bg-amber-100 p-4 text-lg justify-center">
      {" "}
      <NavbarItem label="trending" param="fetchTrending" />
      <NavbarItem label="top rated " param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
