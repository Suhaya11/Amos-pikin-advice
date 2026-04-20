import { NextRequest, NextResponse } from "next/server";

// import { cookies } from "next/headers";
import { Data, dataRetriver, user } from "./src/components/data";

// 1. Specify protected and public routes
const protectedRoutes = ["/fake-atm/dashboard"];
const publicRoutes = ["/fake-atm/login", "/fake-atm/signup", "/"];

export default async function proxy(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  //   const cookie = (await cookies()).get("session")?.value;
  //   const session = await decrypt(cookie);
  //   const query = localStorage?.getItem("AmosIdeaApp");
  const currentData: Data = JSON.parse(false || "{}");
  const currentUser: user | undefined =
    currentData.atm_simulations?.currentUSer;

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !currentUser?.loginInfo.phoneNumber) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    currentUser?.loginInfo.phoneNumber &&
    !req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Proxy should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
