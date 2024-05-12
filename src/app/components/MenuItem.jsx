import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, icon }) => {
  return (
    <div>
      <Link href={address}>
        {icon}
        <p className="uppercase sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
