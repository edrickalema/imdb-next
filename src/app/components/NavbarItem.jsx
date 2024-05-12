"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavbarItem = ({ label, param }) => {
  const searchParam = useSearchParams();

  const params = searchParam.get("genre");
  console.log(params);
  return (
    <div>
      <Link
        className={`capitalize ${
          params === param
            ? "underline underline-offset-8 rounded-md decoration-amber-500 decoration-4"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavbarItem;
