import React from "react";
import Button from "@/components/Button";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="flex justify-center align-middle w-screen p-3 h-16">
      <div className="flex justify-start align-middle h-full w-full">
        <h1 className="text-2xl font-bold px-5 center">Logo</h1>
      </div>
      <div className="flex justify-evenly align-middle h-full text-xl font-semibold w-max opacity-80">
        <ul className="center px-20">
          <li className="px-3 cursor-pointer m-2">Home</li>
          <li className="px-3 cursor-pointer m-2">About</li>
          <li className="px-3 cursor-pointer m-2">Contact</li>
        </ul>
      </div>

      <div className="flex center">
        <Button label="Click to Login">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
