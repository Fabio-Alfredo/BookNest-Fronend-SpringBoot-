import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
      
    </>
  );
};

export default HomeLayout;
