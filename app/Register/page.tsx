"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import BgImage from "./../(images)/logo.jpg";
import { Button, Card, CardBody, Checkbox, Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

const Register = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["State"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const handleRegister = () => {
    console.log("Register");
  };

  return (
    <>
      <div>
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

        <div className="px-4 py-40 mx-auto sm:px-6 lg:px-8 max-w-7x1">
          <div className="max-w-lg mx-auto text-center">
            <Card
              className="pt-4 pb-4 px-8 bg-transparent"
              style={{ border: "solid" }}
            >
              <h1 className="text-tiny uppercase font-bold">Login</h1>
              <CardBody>
                <Input
                  className="py-1"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <Input
                  className="py-1"
                  type="email"
                  name="email"
                  placeholder="Confirm Email"
                />

                <Button>Check Email</Button>

                <Input
                  className="py-1"
                  type="text"
                  name="surName"
                  placeholder="Surname"
                />
                <Input
                  className="py-1"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  className="py-1"
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                />
                <Input
                  className="py-1"
                  type="date"
                  name="birthday"
                  placeholder="Birth-Day"
                />
                <Input
                  className="py-1"
                  type="number"
                  name="mobileNumber"
                  placeholder="Mobile No."
                />
                <Input
                  className="py-1"
                  type="address"
                  name="Address"
                  placeholder="Address"
                />

                <div className="py-14">
                  Picture
                </div>




                <Input
                  className="py-1 "
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <Input
                  className="py-1 "
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                />

                <div className="my-2">
                  <Link href="/">
                    <Button>Already have an account?</Button>
                  </Link>
                </div>

                <Button onClick={handleRegister}>Register</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
