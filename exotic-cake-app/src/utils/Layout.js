import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={`main_container `} id="main_body">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
