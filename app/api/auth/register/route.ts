import userService from "@/server/service/user-service";
import { connectToDB } from "@/server/utils/mongoose";
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

interface IUserBody {
  email: string;
  password: string;
  username: string;
}

export async function POST(request: Request) {
  try {
    connectToDB();
    
    const { email, password, username }: IUserBody = await request.json();

    const userData = await userService.register(email, password, username);

    cookies().set("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return Response.json({ userData });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
