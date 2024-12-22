import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <>
      <Link
        href={href}
        className="blck py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white"
      >
        {title}
      </Link>
    </>
  );
};

export default NavLink;
