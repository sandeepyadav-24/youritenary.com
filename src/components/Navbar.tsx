import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row justify-between my-3">
        <li className="mx-10 text-lg font-bold">Logo</li>
        <li className="mx-10">Sign in</li>
      </ul>
    </div>
  );
};

export default Navbar;
