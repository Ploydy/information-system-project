import React from "react";
import BgImage from "../../app/(images)/logo2.png";
import Image from "next/image";
import AdminNav from "../(components)/AdminNav";

export default function Layout({ children, ...props }: any) {
  return (
    <>
    <AdminNav/>

      <main {...props}>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={BgImage}
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
        {children}
        </main>
    </>
  );
}

