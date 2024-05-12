import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, icon }) => {
  return (
    <div>
      <Link className="flex items-center gap-1" href={address}>
        <div className="sm:hidden">{icon}</div>
        <p className="uppercase hidden sm:inline capitalized">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
