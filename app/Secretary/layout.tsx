import React from "react";
import SecretaryNav from "../(components)/SecretaryNav";

export default function Layout({ children, ...props }: any) {
  return (
    <>
    <SecretaryNav />
      <main {...props}>{children}</main>
    </>
  );
}
