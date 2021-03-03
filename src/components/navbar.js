import React from "react";
import tw from "twin.macro";

const Nav = tw.nav`fixed top-0 h-16 w-screen bg-skyblue text-whitesmoke flex items-center justify-between flex-wrap px-6 lg:px-16`;
const LogoContainer = tw.div`text-2xl font-bold`;
const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
};

const Navbar = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Nav>
      <LogoContainer>Matkulku</LogoContainer>
      <button
        onClick={() => scrollTop()}
        className="bg-whitesmoke text-skyblue font-bold py-2 px-2 lg:px-4 text-base rounded-full align-middle flex focus:outline-none focus:ring"
      >
        <PlusIcon />
        <span className="hidden lg:inline"> Tambah Matkul</span>
      </button>
    </Nav>
  );
};

export default Navbar;
