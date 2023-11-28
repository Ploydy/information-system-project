import User from "../../(models)/User";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Get Ran");
  try {
    const users = await User.find();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 501 });
  }
}

export async function POST(req:any) {
  console.log("POST Ran");
  try {
    const body = await req.json();
    const userData = body.formData;
    await User.create(userData);
    
    return NextResponse.json({ message: "User Created",  }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 501 });
  }
}
