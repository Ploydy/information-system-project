import React from "react";
import Navbar from "../(components)/Nav";

export default function Layout({ children, ...props }: any) {
  return (
    <>
    <Navbar/>
      <main {...props}>{children}</main>
    </>
  );
}

