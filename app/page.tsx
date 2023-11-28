"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BgImage from "./(images)/logo2.png";
import { Button, Card, CardBody, Checkbox, Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function Home(props: any) {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState(new Set(["State"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const handleLogin = () => {
    console.log(`login ${selectedValue}`);
    if (selectedValue === "admin") {
      router.push("/Admin");
    }
    if (selectedValue === "employee") {
      router.push("/Employee");
    }
    if (selectedValue === "secretary") {
      router.push("/Secretary");
    }
    if (selectedValue === "customer") {
      router.push("/customer");
    }
    if (selectedValue === "State") {
      alert("incorrect Credentails Please choose one on state below! ");
    }
  };

  return (
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
                className="py-1 "
                type="password"
                name="password"
                placeholder="Password"
              />
              <Checkbox className="py-4">Remember me</Checkbox>
              <div className="mx-0 my-2">
                <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      onSelectionChange={setSelectedKeys}
                      {...props}
                    >
                      <DropdownItem key="admin">Admin</DropdownItem>
                      <DropdownItem key="employee">Employee</DropdownItem>
                      <DropdownItem key="secretary">Secretary</DropdownItem>
                      <DropdownItem key="customer">Customer</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="my-2">
                  <Link href="/Register">
                    <Button>Create an account</Button>
                  </Link>
                </div>
              </div>
              <Button onClick={handleLogin}>Login</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
