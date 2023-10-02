import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  // return NextResponse.json(
  //   { success: false, message: "authentication failed" },
  //   { status: 401 }
  // );
}
