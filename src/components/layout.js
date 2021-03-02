import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import TambahKuliah from "./tambahkuliah";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-24 px-4 lg:px-16">
        <TambahKuliah />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
