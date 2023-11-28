import User from "@/app/(models)/User";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
  console.log('Get ID Ran')
  try {
    const { id } = params

    const foundUser = await User.findOne({ _id: id});

    return NextResponse.json({ foundUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}


export async function DELETE(req, {params}) {
  console.log('DELETE RAN');
  try {
    const { id } = params

    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}


export async function PUT(req, { params }) {
  console.log('PUT RAN'); 
    try {
      const { id } = params
      const body = await req.json()
      const userData = body.formData

      const updateUserData = await User.findByIdAndUpdate(id, {
        ...userData,
      })

      return NextResponse.json({ message: "User Updated", updateUserData }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }

}