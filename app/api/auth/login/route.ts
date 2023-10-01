import userService from "@/server/service/user-service";
import { connectToDB } from "@/server/utils/mongoose";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    connectToDB();

    const { email, password }: { email: string; password: string } =
      await request.json();

    const userData = await userService.login(email, password);

    cookies().set("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    

    return Response.json(userData);
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
