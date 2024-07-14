import { NextResponse } from "next/server";
import prisma from "@/lib/postgresdb";
import bcrypt from "bcrypt";
import { getUserFromDb } from "@/lib/userfunctions";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const { email, username, firstName, lastName, password } = body.user;

    if (!email || !password) {
      return new NextResponse("Missing data", { status: 500 });
    }
    const user = await getUserFromDb(email);

    if (user) {
      return new NextResponse("User Already Exists", { status: 500 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        firstName,
        lastName,
        username,
      },
    });
    return NextResponse.json(newUser);
  } catch (err) {
    alert("REGISTER_ERROR" + err);
  }
}
