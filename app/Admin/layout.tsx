import React from "react";
import Navbar from "../(components)/Nav";
import AdminNav from "../(components)/AdminNav";

export default function Layout({ children, ...props }: any) {
  return (
    <>
    <AdminNav/>
      <main {...props}>{children}</main>
    </>
  );
}

