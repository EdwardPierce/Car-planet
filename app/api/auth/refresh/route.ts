import userService from "@/server/service/user-service";
import { connectToDB } from "@/server/utils/mongoose";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    connectToDB();

    const refreshToken = cookies().get("refreshToken");
    const allCookies = cookies().getAll();
    console.log("allCookies: ", allCookies);

    const userData = await userService.refresh(refreshToken?.value);

    cookies().set("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return Response.json(userData);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return Response.json(error.message, {
        status: 401,
        statusText: error.message,
      });
    }
  }
}
