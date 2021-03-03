import React from "react";
import tw from "twin.macro";

const Nav = tw.nav`fixed top-0 h-16 w-screen bg-skyblue text-whitesmoke flex items-center justify-between flex-wrap px-4 lg:px-16`;

const Navbar = () => {
  return (
    <Nav>
      <div className="text-2xl font-bold">Matkulku</div>
      <div className="bg-whitesmoke text-skyblue font-bold py-2 px-6 text-base rounded-full align-middle">
        + Tambah Matkul
      </div>
    </Nav>
  );
};

export default Navbar;
