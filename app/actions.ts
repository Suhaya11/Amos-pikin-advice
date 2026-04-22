// "use server";
// import { cookies } from "next/headers";

// export async function handleAuth(formData: FormData) {
//   // 1. Perform your login/signup logic here (fetch to your DB/API)
//   const token = "your_generated_auth_token";

//   // 2. Set the cookie
//   const cookieStore = await cookies();
//   cookieStore.set("auth-token", token, {
//     httpOnly: true, // Prevents JS access (XSS protection)
//     secure: process.env.NODE_ENV === "production", // Only over HTTPS
//     sameSite: "lax",
//     path: "/", // Accessible across the whole site
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//   });

//   // 3. Redirect after success
//   // redirect('/dashboard');
// }
