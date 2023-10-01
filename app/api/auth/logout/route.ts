import TokenModel from "@/server/models/token";
import userService from "@/server/service/user-service";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { connectToDB } from "@/server/utils/mongoose";

export async function DELETE(request: Request) {
  try {
    connectToDB();

    const refreshToken = cookies().get("refreshToken");
    const tokenDeletedInfo = await userService.logout(refreshToken?.value);

    cookies().delete("refreshToken");
   

    return Response.json(tokenDeletedInfo);
    
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
