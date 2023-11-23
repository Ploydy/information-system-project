import Image from "next/image";
import BgImage from "./(images)/wallhaven-qzdqvr.jpg";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
} from "@nextui-org/react";
import StateDropdown from "./(components)/StateDropdown";

export default function Home() {
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
          style={{objectFit:"cover"}}
        />
      </div>

      <div className="px-4 py-40 mx-auto sm:px-6 lg:px-8 max-w-7x1">
        <div className="max-w-lg mx-auto text-center">
          <Card className="pt-4 pb-4 px-8 bg-transparent" style={{ border: "solid"}} >
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
              <StateDropdown />
              </div>
              <Button>Sign In</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
