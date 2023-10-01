import userService from "@/server/service/user-service";
import { cookies } from "next/headers";

export async function PUT(request: Request) {
  try {
    const refreshToken = cookies().get("refreshToken");

    const userData = await userService.refresh(refreshToken?.value);

    cookies().set("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return Response.json(userData);
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
